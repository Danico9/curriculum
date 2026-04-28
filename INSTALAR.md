# Guía de instalación y despliegue

## Requisitos previos

- [Node.js](https://nodejs.org) instalado (v18 o superior)
- [Git](https://git-scm.com) instalado
- Cuenta en [GitHub](https://github.com)

---

## 1. Instalar dependencias del proyecto

```bash
npm install
```

---

## 2. Arrancar en local (desarrollo)

```bash
npm start
```

Se abre automáticamente en `http://localhost:3000`

---

## 3. Publicar en GitHub Pages

### 3.1 — Instalar dependencias (incluye gh-pages, ya configurado)

```bash
npm install
```

### 3.2 — Crear el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repo: `curriculum`
3. Déjalo en público
4. **No** marques ninguna opción de inicialización
5. Click en **Create repository**

### 3.3 — Subir el código a GitHub

```bash
git add .
git commit -m "Portfolio curriculum"
git remote add origin https://github.com/Danico9/curriculum.git
git push -u origin master
```

### 3.4 — Desplegar

```bash
npm run deploy
```

Este comando hace el build y lo sube solo a la rama `gh-pages`.

### 3.5 — Activar GitHub Pages

1. Ve a tu repo en GitHub
2. **Settings** → **Pages** (menú lateral)
3. En *Branch* selecciona `gh-pages` y carpeta `/ (root)`
4. Click en **Save**

En 1-2 minutos la web estará disponible en:

```
https://Danico9.github.io/curriculum
```

---

## 4. Actualizar la web después de cambios

Cada vez que modifiques algo y quieras publicarlo:

```bash
git add .
git commit -m "Descripción del cambio"
git push
npm run deploy
```

---

## 5. Modificar el contenido del CV

Todo el contenido está centralizado en un único archivo:

```
src/data/cv.js
```

Edita ese archivo y vuelve a hacer `npm run deploy` para publicar los cambios.
