import { cv } from '../data/cv';

function Education() {
  return (
    <section id="formacion" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Formación &amp; Certificaciones</h2>
          <div className="section-divider" />
        </div>

        <div className="education__layout">
          <div>
            <p className="edu-section-label">Formación Académica</p>
            <div className="edu-cards">
              {cv.education.map(e => (
                <div key={e.id} className="edu-card">
                  <h3 className="edu-card__degree">{e.degree}</h3>
                  <p className="edu-card__institution">
                    {e.institution}{e.location ? ` · ${e.location}` : ''}
                  </p>
                  <p className="edu-card__period">{e.period}</p>
                  {e.notes && <p className="edu-card__notes">{e.notes}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="edu-section-label">Certificaciones</p>
            {cv.certifications.map(cert => (
              <div key={cert.id} className="cert-card">
                <span className="cert-card__icon">🏅</span>
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <div className="cert-card__meta">
                  <div className="cert-card__row">
                    <span className="cert-card__label">Expedición</span>
                    <span className="cert-card__value">{cert.date}</span>
                  </div>
                  <div className="cert-card__row">
                    <span className="cert-card__label">ID</span>
                    <span className="cert-card__value">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
