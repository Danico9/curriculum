import { cv } from '../data/cv';

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconDownload = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

function Hero() {
  const { personal } = cv;

  return (
    <section id="hero" className="hero">
      <div className="hero__container container">
        <div className="hero__layout">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              {personal.title}
            </div>

            <h1 className="hero__name">{personal.name}</h1>

            <div className="hero__intro">
              <p>QA Engineer en Làberit, donde aseguro la calidad de una plataforma de gestión sanitaria integral (HIS/EMR) utilizada en hospitales y clínicas. Mi día a día se centra en la automatización de pruebas E2E con Cypress y Playwright, testing de APIs con Postman, definición de escenarios BDD con Gherkin y Cucumber, y validación de datos en SQL.</p>
              <p>Certificado ISTQB® Foundation Level 4.0. Con base técnica en desarrollo, lo que me permite colaborar estrechamente con los equipos de desarrollo y entender el software desde dentro.</p>
              <p>Siempre buscando mejorar y crecer profesionalmente en el mundo del testing y la calidad del software.</p>
            </div>

            <div className="hero__contact">
              <span className="hero__contact-item">
                <IconPin /> {personal.location}
              </span>
              <a href={`mailto:${personal.email}`} className="hero__contact-item">
                <IconMail /> {personal.email}
              </a>
              <a href={personal.linkedin.url} target="_blank" rel="noopener noreferrer" className="hero__contact-item">
                <IconLinkedIn /> {personal.linkedin.label}
              </a>
              <a href={personal.github.url} target="_blank" rel="noopener noreferrer" className="hero__contact-item">
                <IconGitHub /> {personal.github.label}
              </a>
            </div>

            <div className="hero__actions">
              <a href="#sobre-mi" className="btn btn--primary">Ver perfil</a>
              <a href={`${process.env.PUBLIC_URL}/CV_Daniel_Ciscar_QA.pdf`} download className="btn btn--outline">
                <IconDownload /> Descargar CV
              </a>
            </div>
          </div>

          <div className="hero__photo-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/foto.png`}
              alt={personal.name}
              className="hero__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
