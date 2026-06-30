import data from '../data/resumeData';
import './AboutSection.css';

const { personal, about } = data;

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-avatar-wrapper">
              <div className="about-avatar">
                <span className="avatar-placeholder">{personal.avatarChar}</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <span className="section-label">{about.label}</span>
            <h2 className="section-title">
              {about.titleBefore}<span className="text-accent">{about.titleAccent}</span>{about.titleAfter}
            </h2>
            <div className="glow-line" />
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-desc">{p}</p>
            ))}

            <div className="about-contact">
              {about.contacts.map((c) => (
                <div key={c.label} className="contact-item">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
              ))}
            </div>

            <div className="about-stats">
              {about.stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
