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
      label: "mycvdancisbla.web.app",
      url: "https://mycvdancisbla.web.app",
    },
  },

  summary:
    "QA Engineer con experiencia en automatización de pruebas end-to-end, testing de APIs y aseguramiento de la calidad del software en el sector sanitario digital. Especializado en plataformas de gestión hospitalaria (HIS) y registro médico electrónico (EMR). Dominio de herramientas como Cypress, Playwright, Postman, Cucumber y Gherkin para la definición y ejecución de pruebas automatizadas bajo metodología BDD. Certificado ISTQB Foundation Level 4.0. Experiencia en gestión de incidencias con JIRA, validación de datos en bases de datos, integración continua y trabajo en equipo bajo metodologías ágiles.",

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
        "QA en plataforma de gestión sanitaria integral (HIS/EMR) para hospitales y clínicas.",
        "Automatización de pruebas E2E con Cypress y Playwright.",
        "Testing de APIs REST con Postman.",
        "Definición de escenarios de prueba con Gherkin y ejecución con Cucumber.",
        "Gestión de incidencias y seguimiento de bugs en JIRA.",
        "Pruebas funcionales, de regresión e integración del producto.",
        "Consultas y validación de datos en bases de datos (SQL).",
        "Colaboración con equipos de desarrollo en metodologías ágiles.",
        "Uso de GitLab para control de versiones y gestión del ciclo de vida del testing.",
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
      degree: "Grado en Ingeniería Informática",
      institution: "UNED",
      location: "Valencia",
      period: "Sep 2017 – Actualidad",
      notes: "Último curso. Pendiente: 5 asignaturas y Trabajo Fin de Grado.",
    },
    {
      id: 2,
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
    qa: ["Cypress", "Playwright", "Postman", "Cucumber", "Gherkin (BDD)", "Mecha", "JIRA", "SQL"],
    dev: ["Java", "Spring Boot", "Git", "GitLab", "Docker", "GitFlow", "HTML/CSS", "JavaScript", "Python", "Firebase", "APIs REST"],
  },

  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "B1 – Cambridge 139" },
  ],

  competencies: [
    "Automatización de pruebas (E2E, API)",
    "Metodologías BDD / TDD",
    "Diseño de planes y casos de prueba",
    "Desarrollo web y bases de datos",
    "Pruebas de regresión e integración",
    "Control de versiones y CI/CD",
  ],
};
