import data from '../data/resumeData';
import './ProjectsSection.css';

const { projects } = data;

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">{projects.label}</span>
          <h2 className="section-title">{projects.title}</h2>
          <div className="glow-line" />
          <p className="section-subtitle">{projects.subtitle}</p>
        </div>
        <div className="projects-grid">
          {projects.items.map((proj, i) => (
            <article key={i} className="project-card">
              <div className="project-card-bg" />
              <div className="project-card-content">
                <div className="project-meta">
                  <span className="project-period">{proj.period}</span>
                  <span className="project-tech">{proj.tech}</span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-subtitle">{proj.subtitle}</p>
                <p className="project-desc">{proj.desc}</p>
                <ul className="project-duties">
                  {proj.duties.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
