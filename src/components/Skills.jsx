import { cv } from '../data/cv';

function Skills() {
  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades</h2>
          <div className="section-divider" />
        </div>

        <div className="skills__grid">
          <div className="skills__category">
            <p className="skills__category-title">
              <span className="skills__category-dot skills__category-dot--qa" />
              Testing &amp; QA
            </p>
            <div className="skills__tags">
              {cv.skills.qa.map(s => (
                <span key={s} className="skill-tag skill-tag--qa">{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__category">
            <p className="skills__category-title">
              <span className="skills__category-dot skills__category-dot--dev" />
              Otras Habilidades
            </p>
            <div className="skills__tags">
              {cv.skills.dev.map(s => (
                <span key={s} className="skill-tag skill-tag--dev">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="skills__languages-title">Idiomas</p>
        <div className="skills__languages">
          {cv.languages.map(l => (
            <div key={l.language} className="language-item">
              <p className="language-item__name">{l.language}</p>
              <p className="language-item__level">{l.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
