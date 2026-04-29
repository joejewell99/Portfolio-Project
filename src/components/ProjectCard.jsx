import './ProjectCard.css'

function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project →
        </a>
      )}
    </div>
  )
}

export default ProjectCard
