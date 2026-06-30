import data from '../data/resumeData';
import './SkillsSection.css';

const { skills, honors } = data;

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="skills-header">
          <span className="section-label">{skills.label}</span>
          <h2 className="section-title">{skills.title}</h2>
          <div className="glow-line" />
        </div>

        <div className="skills-grid">
          {skills.items.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-card-title">{skill.title}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <ul className="skill-items">
                {skill.items.map((item, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="honors-section">
          <h3 className="honors-title">{honors.title}</h3>
          <div className="honors-grid">
            {honors.items.map((h, i) => (
              <div key={i} className="honor-item">
                <span className="honor-icon">&#9679;</span>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
