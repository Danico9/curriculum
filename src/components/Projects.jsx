import { cv } from '../data/cv';

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos Personales</h2>
          <div className="section-divider" />
        </div>

        <div className="timeline">
          {cv.projects.map(project => (
            <article key={project.id} className="timeline-card project-card">
              <div className="timeline-card__top">
                <h3 className="timeline-card__role">{project.name}</h3>
              </div>
              <p className="timeline-card__company">{project.tagline}</p>
              <div className="timeline-card__meta">
                <span className="timeline-card__meta-item">{project.period}</span>
              </div>

              <p className="project-card__description">{project.description}</p>

              <ul className="timeline-card__highlights">
                {project.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="skills__tags project-card__tech">
                {project.tech.map(tech => (
                  <span key={tech} className="skill-tag skill-tag--qa">{tech}</span>
                ))}
              </div>

              <div className="project-card__actions">
                <a
                  href={project.links.demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Ver proyecto
                </a>
                <a
                  href={project.links.repo}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Código en GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
