export const cv = {
  personal: {
    name: "Daniel Císcar Blázquez",
    title: "QA Engineer",
    location: "Valencia, España",
    email: "danicb1994@hotmail.com",
    linkedin: {
      label: "linkedin.com/in/danielciscarblazquez",
      url: "https://www.linkedin.com/in/danielciscarblazquez",
    },
    github: {
      label: "github.com/Danico9",
      url: "https://github.com/Danico9",
    },
    web: {
      label: "danico9.github.io/curriculum",
      url: "https://danico9.github.io/curriculum/",
    },
  },

  summary:
    "QA Engineer especializado en software sanitario (HIS/EHR), con experiencia en automatización de pruebas end-to-end, testing de APIs e integraciones HL7. Lideré la migración de la suite E2E de Cypress a Playwright, rediseñando su arquitectura (Page Object Model, tres capas) y configurando su ejecución en pipelines de GitLab CI. Valido el intercambio de mensajes HL7 entre sistemas y su reflejo en base de datos mediante SQL, y analizo logs del backend para identificar el origen de los fallos. Certificado ISTQB Foundation Level 4.0. Experiencia en BDD con Gherkin y Cucumber, gestión de incidencias con JIRA y trabajo bajo metodología Scrum.",

  experience: [
    {
      id: 1,
      role: "QA Engineer",
      company: "Làberit",
      location: "Valencia",
      period: "Nov 2024 – Actualidad",
      type: "Híbrido",
      current: true,
      highlights: [
        "QA en plataforma de gestión sanitaria integral (HIS/EHR) para hospitales y clínicas.",
        "Migración íntegra de suite E2E de Cypress a Playwright (JavaScript), incluyendo rediseño de arquitectura (Page Object Model, tres capas) y reestructuración de fixtures.",
        "Diseño de sistema de fixtures modulares con generación dinámica de datos de prueba.",
        "Configuración de pipeline CI/CD en GitLab con paralelismo, retries automáticos y publicación de evidencias.",
        "Pruebas de integración HL7 entre sistemas sanitarios: validación de mensajes, revisión de mapeos y verificación de datos en base de datos con SQL.",
        "Diagnóstico de incidencias mediante análisis de logs del backend en entornos, documentando la causa para desarrollo y arquitectura.",
        "Testing de APIs REST con Postman.",
        "Definición de escenarios BDD con Gherkin y ejecución con Cucumber.",
        "Pruebas funcionales, de regresión e integración del producto.",
        "Gestión de incidencias en JIRA y colaboración con desarrollo bajo metodología Scrum.",
      ],
    },
    {
      id: 2,
      role: "Desarrollador Backend (Prácticas)",
      company: "Làberit",
      location: "Valencia",
      period: "Sep 2024 – Nov 2024",
      duration: "3 meses",
      type: "Presencial",
      current: false,
      highlights: [
        "Desarrollo backend con Java y Spring Boot para creación de APIs REST.",
        "Uso de herramientas DevOps: Docker, Git, GitLab y GitFlow.",
      ],
    },
    {
      id: 3,
      role: "Militar – Oficina",
      company: "Fuerzas Armadas de España",
      location: null,
      period: "May 2018 – Ene 2022",
      type: null,
      current: false,
      highlights: [
        "Gestión administrativa y organizativa en entorno militar.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "CFGS Desarrollo de Aplicaciones Web (DAW)",
      institution: "Título de Técnico Superior",
      location: null,
      period: "2024 – 2026",
      notes: null,
    },
    {
      id: 2,
      degree: "Grado en Ingeniería Informática",
      institution: "UNED",
      location: "Valencia",
      period: "Sep 2017 – Actualidad",
      notes: "Último curso. Pendiente: 5 asignaturas y Trabajo Fin de Grado.",
    },
    {
      id: 3,
      degree: "Transformación Digital – Agentes del Cambio",
      institution: "EOI",
      location: null,
      period: "2024",
      notes: "Programa Generación Digital (375 h).",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "ISTQB® Certified Tester – Foundation Level 4.0",
      issuer: "ISTQB® – International Software Testing Qualifications Board",
      date: "Jul 2025",
      credentialId: "25-CTFL 4-263957-81",
    },
  ],

  skills: {
    qa: ["Playwright", "JavaScript", "Cypress", "Postman", "GitLab CI/CD", "HL7", "SQL", "Page Object Model", "Cucumber", "Gherkin (BDD)", "Mocha", "Node.js", "JIRA"],
    dev: ["Java", "Spring Boot", "Git", "GitLab", "Docker", "GitFlow", "HTML/CSS", "Python", "Firebase", "APIs REST"],
  },

  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "B1 – Cambridge 139" },
  ],

  competencies: [
    "Aseguramiento de la calidad (QA)",
    "Automatización de pruebas (E2E, API)",
    "Metodologías BDD / TDD",
    "Scrum / Metodologías ágiles",
    "Diseño de planes y casos de prueba",
    "Desarrollo web y bases de datos",
    "Pruebas de regresión e integración",
    "Control de versiones y CI/CD",
    "Arquitectura de suites de automatización",
    "Migración entre frameworks de testing",
    "Pruebas de integración HL7 / interoperabilidad sanitaria",
    "Diagnóstico de incidencias y análisis de logs",
  ],
};
