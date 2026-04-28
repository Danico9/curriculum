import { cv } from '../data/cv';

const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconMapPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          <div className="section-divider" />
        </div>

        <div className="timeline">
          {cv.experience.map(job => (
            <div
              key={job.id}
              className={`timeline-card${job.current ? ' timeline-card--current' : ''}`}
            >
              <div className="timeline-card__top">
                <h3 className="timeline-card__role">{job.role}</h3>
                {job.current && <span className="badge-current">Actual</span>}
              </div>

              <p className="timeline-card__company">{job.company}{job.location ? ` · ${job.location}` : ''}</p>

              <div className="timeline-card__meta">
                <span className="timeline-card__meta-item">
                  <IconCalendar /> {job.period}
                  {job.duration ? ` (${job.duration})` : ''}
                </span>
                {job.type && (
                  <span className="timeline-card__meta-item">
                    <IconBriefcase /> {job.type}
                  </span>
                )}
              </div>

              <ul className="timeline-card__highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
