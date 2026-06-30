import data from '../data/resumeData';
import './WorkExperience.css';

const { experience } = data;

export default function WorkExperience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="experience-header">
          <span className="section-label">{experience.label}</span>
          <h2 className="section-title">{experience.title}</h2>
          <div className="glow-line" />
          <p className="section-subtitle">{experience.subtitle}</p>
        </div>

        <div className="timeline">
          {experience.items.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {i < experience.items.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-period">{exp.period}</div>
                  <span className={`timeline-badge ${exp.type === '正式' ? 'badge-fulltime' : ''}`}>
                    {exp.type}
                  </span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
