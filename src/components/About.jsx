import { cv } from '../data/cv';

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Perfil Profesional</h2>
          <div className="section-divider" />
        </div>

        <div className="about__card">
          <p className="about__text">{cv.summary}</p>
        </div>

        <p className="about__sub">Competencias Clave</p>
        <div className="competency-tags">
          {cv.competencies.map(c => (
            <span key={c} className="competency-tag">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
