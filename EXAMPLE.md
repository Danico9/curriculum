# QA Automation Engineer — Plataforma SaaS de Gestión Hospitalaria

---

## Descripción del proyecto

Diseño, implementación y mantenimiento de una suite completa de tests de automatización end-to-end sobre una plataforma SaaS de gestión hospitalaria construida con Angular, AngularJS y PrimeNG. La aplicación cubre el ciclo clínico completo de un hospital: urgencias, hospitalización, consultas externas, citación, transcripción de peticiones, hospitalización domiciliaria y herramientas de administración del sistema.

El proyecto partió de una suite preexistente en Cypress y se migró íntegramente a Playwright, incluyendo el rediseño de la arquitectura, la reestructuración de los datos de prueba y la adaptación de todos los selectores y patrones de interacción a las particularidades del framework de la aplicación.

---

## Arquitectura de la suite

Se diseñó e implementó una **arquitectura de tres capas** con separación estricta de responsabilidades, aplicada de forma consistente en todos los módulos:

### Capa 1 — Specs (`tests/`)
Declaran qué se prueba y en qué orden. Solo invocan workflows; nunca interactúan directamente con el DOM ni con Page Objects. Cada fichero de test corresponde a un flujo de negocio completo.

### Capa 2 — Workflows (`workflows/`)
Orquestan los Page Objects para componer flujos de negocio completos. Contienen la lógica de qué pasos se ejecutan, en qué orden y bajo qué condiciones, pero sin tocar el DOM directamente. Exportan funciones nombradas (nunca clases) que los specs invocan con los datos de prueba.

### Capa 3 — Page Objects (`pages/`)
Encapsulan exclusivamente la interacción con el DOM. Cada Page Object expone un conjunto de locators en `this.elements` y métodos de acción atómicos. No contienen lógica de negocio ni flujos completos.

Esta separación permite modificar selectores sin tocar los tests, cambiar flujos de negocio sin reescribir los Page Objects y mantener los specs legibles como documentación viva de qué hace el sistema.

---

## Módulos cubiertos

| Módulo | Descripción |
|--------|-------------|
| Consultas Externas | Flujo completo: citación, admisión, atención médica, peticiones clínicas, firma de informe, justificante |
| Urgencias | Admisión, triaje de enfermería, atención médica, peticiones, extracción de muestras, alta médica y administrativa con múltiples destinos (CCEE, domicilio, hospitalización, éxitus) |
| Hospitalización | Ingreso, mapa de camas, operaciones de enfermería, constantes vitales, plan de cuidados, agenda, notas de evolución, alta médica y de enfermería, transferencia de camas, permisos hospitalarios, peticiones hospitalarias |
| Citación | Cita periódica estándar, cita periódica en agenda de recurso con fallback, cita múltiple automática y manual |
| Transcripción de peticiones | 10 tipos de petición externa: imagen médica, laboratorio, anatomía patológica, otras pruebas, ingreso, cita, cita periódica, interconsulta, comité de tumores, hospitalización domiciliaria |
| Hospitalización Domiciliaria | Circuito completo: petición de ingreso, validación administrativa y clínica, ingreso, cita, informes de alta, resumen HC |
| Codificador diagnóstico | Cobertura de múltiples combinaciones de búsqueda por modo e índice; lógica de diagnóstico principal, checks, alias, favoritos; deduplicación al firmar |
| Herramientas QA | Generación masiva de camas, ingreso obstétrico, mantenimiento de datos |

---

## Gestión de datos de prueba

El sistema de fixtures está estructurado por módulo y por tipo de dato, permitiendo aislar los datos de cada flujo y ejecutar tests en paralelo sin colisiones.

### Tipos de fixtures

- **Datos demográficos de paciente**: nombre, apellidos, fecha de nacimiento, género, documento de identidad (con dígito de control válido), teléfono, email, dirección completa, garante y convenio asegurador.
- **Identificadores clínicos (NHC)**: extraídos dinámicamente de la aplicación tras la creación del paciente, parseados desde el DOM con expresión regular y persistidos en disco como fixture independiente para su uso en los pasos siguientes del mismo flujo.
- **Recursos clínicos**: camas hospitalarias por módulo y paciente, agendas médicas, franjas horarias de citación, permisos hospitalarios generados en ejecución.
- **Credenciales por rol**: fichero centralizado que mapea alias de rol a usuario de sistema; consumido por la función `login()` en todos los tests.
- **Configuración de búsqueda**: especialidades, servicios, prestaciones, estaciones de trabajo y filtros de agenda.
- **Profesionales**: datos de profesionales médicos usados en flujos de firma, interconsulta y codificación.

### Generación dinámica de pacientes

Se implementó una clase de utilidad capaz de generar pacientes sintéticos en tiempo de ejecución:
- Apellidos aleatorios de longitud variable mediante generación de cadenas de caracteres.
- DNI sintético con algoritmo de cálculo del dígito de control (módulo 23 sobre tabla de letras).
- Variantes por género (masculino / femenino) para flujos que lo requieren (p.ej. ingreso obstétrico).
- Escritura del fixture generado a disco antes del inicio del test, para que los pasos siguientes puedan consumirlo como cualquier otro fixture estático.
- Tras la creación en la aplicación, búsqueda del paciente por nombre completo, extracción del NHC del DOM y persistencia en un segundo fichero de fixture, creando así una cadena de dependencia de datos entre tests del mismo flujo.

---

## Sistema de autenticación multi-rol

Se implementó una función `login()` centralizada que gestiona la autenticación para más de quince perfiles de usuario distintos:

| Alias | Perfil |
|-------|--------|
| `adm` | Administrativo de consultas externas |
| `med` | Médico de consultas externas |
| `enf` | Enfermería de consultas externas |
| `urgadm` / `urgmed` / `urgenf` | Urgencias (administrativo, médico, enfermería) |
| `purgmed` / `penfurg` | Urgencias con perfiles adicionales |
| `admHos` / `medHos` / `enfHos` | Hospitalización (administrativo, médico, enfermería) |
| `padmuhd` / `pmeduhd` / `penfuhd` | Hospitalización domiciliaria |
| `tradio` | Técnico radiólogo |
| `ptlabo` | Técnico de laboratorio |
| `pmedicob` | Médico de oncología |
| `jferro` | Matrona / Obstetricia |
| `sysadmin` | Administrador del sistema |

La función gestiona además el aviso de responsabilidad legal que aparece en el primer login de cada sesión, limpia cookies entre tests para garantizar el aislamiento de sesión, y espera a que la pantalla principal sea interactuable antes de devolver el control al test.

Cada test declara explícitamente el rol con el que actúa, haciendo el spec autoexplicativo y facilitando la auditoría de qué perfil realiza cada paso clínico.

---

## Estrategia de selectores y patrones de componentes

La aplicación mezcla AngularJS legacy con Angular moderno y PrimeNG, lo que genera componentes con comportamientos no estándar que requieren estrategias de selección específicas.

### Jerarquía de selectores

1. `[data-cy="..."]` — atributo de test explícito, siempre preferido.
2. `[translate="CLAVE"]` — para botones con texto traducido (Aceptar, Guardar, Posponer…).
3. `[ng-bind="expresión"]` — para datos enlazados en AngularJS.
4. `getByRole(...)` — selector semántico de Playwright.
5. CSS acotado al contenedor — última opción, nunca selectores globales.

### Componentes específicos documentados

- **Dropdowns Angular (`si-selector`)**: el `data-cy` está en el componente wrapper, no en el dropdown interno. Se requiere disparar el trigger del `p-dropdown` interno y esperar el panel antes de filtrar.
- **Multiselects (`si-selector-multiple`)**: verificación del estado `p-highlight` / `aria-selected` antes de hacer clic para evitar toggles accidentales. Uso de `evaluate()` para clic nativo y evitar la doble inversión del estado en Angular.
- **Datepickers con máscara (`si-datepicker`)**: `.clear()` no funciona en PrimeNG; se usa `Control+A` + `Delete` + `pressSequentially()` con `delay` + `Tab` para disparar la validación. Formato sin separadores para fechas, con separadores para fechas con hora.
- **Checkboxes con input oculto (`si-check`)**: nunca `.check()` sobre el input; se clica el `<label>` visible y se verifica el estado con `.isChecked()` sobre el `<input>`.
- **Dropdowns AngularJS (`af-selector`)**: el input de búsqueda y la lista de resultados se renderizan globalmente fuera del componente; los selectores acotados al componente siempre fallan. Se usa `.filter({ visible: true })` para identificar el dropdown activo entre múltiples instancias.
- **Botones de navegación (`si-go-to-route-button`)**: son elementos `<a>`, no `<button>`; los selectores por rol `button` no los encuentran.

### Escala de clic robusto

Se documentó e implementó una escala de cinco niveles de clic para resolver distintos escenarios de la aplicación:

1. `.click()` — caso estándar.
2. `.scrollIntoViewIfNeeded()` + `.click({ force: true })` — elemento en viewport o con overlay.
3. `.scrollIntoViewIfNeeded()` + `.dispatchEvent('click')` — botones con capas encima (ngdialog-close).
4. `.evaluate(el => el.scrollIntoView(...))` + `.evaluate(el => el.click())` — elemento en contenedor con `overflow` anidado (el más frecuente en la aplicación).
5. `.evaluate(el => el.scrollIntoView(...))` + `.focus()` — elementos con `ng-focus` en lugar de `ng-click`.

### Patrones anti-strict-mode

Determinados elementos se renderizan duplicados en el DOM (versión desktop + responsive) y requieren `.first()` explícito. Se documentaron los casos conocidos y se estableció la regla de no usar selectores globales sin acotar al contexto.

### Detección de popups opcionales

Los diálogos opcionales (`ngdialog`) no pueden detectarse con `filter({ hasText })` porque el texto está en un `<span translate>` que no matchea en tiempo de evaluación. Se implementó el patrón de `waitFor({ state: 'attached', timeout: corto })` dentro de un `try/catch` como estándar para toda la suite.

---

## Estructura de los tests

### Ejecución serial de flujos dependientes

Los flujos clínicos son inherentemente secuenciales (un paciente debe existir antes de poder ser admitido; debe estar admitido antes de poder recibir el alta). Se usa `test.describe.serial()` para garantizar el orden dentro de cada fichero y el aislamiento entre ficheros.

### Timeouts adaptativos

Cada test declara su propio timeout según la duración estimada del flujo:
- Acciones individuales: 20 segundos.
- Assertions: 10 segundos.
- Tests cortos (< 2 minutos): sin override.
- Tests medios: 3–7 minutos explícitos.
- Tests largos (flujos con 13+ sub-workflows): hasta 30 minutos.
- Timeout global de seguridad: 10 minutos por defecto en `playwright.config.js`.

### Ciclo de vida de sesión

Cada test hace login al inicio y logout en `afterEach`, garantizando que ningún test hereda estado de sesión del anterior aunque el test previo haya fallado.

### Gestión de estado entre tests de un mismo flujo

El estado se propaga entre tests del mismo fichero exclusivamente a través de fixtures persistidos en disco. Ejemplo: el test de creación de paciente escribe el NHC al fichero; el test de admisión lo lee; el test de alta lo consume. Esto hace el flujo reproducible y permite relanzar desde cualquier paso intermedio con fixtures preexistentes.

---

## Paralelismo y configuración de ejecución

- **Dentro de un fichero**: ejecución serial (dependencia de estado clínico entre tests).
- **Entre ficheros**: paralelismo habilitado; cada fichero usa sus propios fixtures aislados, por lo que no comparten estado.
- **Workers locales**: automáticos según los recursos disponibles.
- **Workers en CI**: 1 worker para garantizar estabilidad en el entorno de integración.
- **Retries en CI**: 2 reintentos automáticos ante fallos de red o timing.
- **Modo debug local**: reporte sobreescribible (`playwright-report/`) para desarrollo iterativo.
- **Modo normal**: reporte con timestamp en carpeta independiente (`playwright-reports/YYYY-MM-DD_HH-mm-ss_nombre-test/`) para conservar histórico de ejecuciones sin sobreescribir.

---

## Integración continua

Pipeline configurado en **GitLab CI/CD** con:
- Instalación de dependencias y navegadores en cada ejecución.
- Ejecución de la suite completa en entorno headless.
- Recolección y publicación de evidencias como artefactos de pipeline (accesibles desde la interfaz de GitLab).
- Reintentos automáticos ante fallos transitorios.
- Bloqueo de `test.only` en CI para evitar que un test de desarrollo llegue a la pipeline.

---

## Colección de evidencias

Configurada en modo completo para todas las ejecuciones:
- **Screenshots**: captura del estado visual en cada paso relevante.
- **Vídeo**: grabación completa de la sesión de navegador por cada test.
- **Trazas de Playwright**: trazas completas que permiten reproducir la ejecución paso a paso desde el visor de Playwright (`playwright show-report`), inspeccionando el DOM, la red y el estado en cada acción.

Modo alternativo disponible (`retain-on-failure`) para reducir el volumen de evidencias en ejecuciones largas cuando el entorno es estable.

---

## Habilidades técnicas demostradas

| Área | Tecnologías / Conceptos |
|------|------------------------|
| Testing E2E | Playwright, Page Object Model, arquitectura tres capas |
| Migración de frameworks | Cypress → Playwright (selectores, fixtures, patrones, config) |
| Frontend testing | Angular, AngularJS, PrimeNG — componentes complejos, strict mode |
| Gestión de datos | Fixtures JSON modulares, generación dinámica, extracción de estado desde DOM, persistencia entre tests |
| Multi-rol | Sistema de autenticación centralizado para más de 15 perfiles clínicos |
| Patrones de robustez | Escala de clic, popups opcionales, anti-strict-mode, sincronización sin sleeps fijos |
| CI/CD | GitLab CI/CD, paralelismo controlado, retries, publicación de artefactos |
| JavaScript / Node.js | Async/await, fs, path, módulos CommonJS/ESM, dayjs, regex |
| Dominio | Flujos clínicos de alta complejidad en entorno hospitalario multi-rol |
