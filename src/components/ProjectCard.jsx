import './ProjectCard.css'

function ProjectCard({
  title,
  description,
  technologies,
  featured = false,
  images = [],
  projectLink,
  codeLink
}) {
  const isProjectLinkExternal = projectLink?.startsWith('http')
  const isProjectLinkInternal = projectLink?.startsWith('#')

  const handleProjectLinkClick = (event) => {
    if (!isProjectLinkInternal) {
      return
    }

    const targetSection = document.querySelector(projectLink)

    if (!targetSection) {
      return
    }

    event.preventDefault()
    targetSection.classList.remove('section-highlight')

    if (projectLink === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.setTimeout(() => {
      targetSection.classList.add('section-highlight')
    }, 250)

    window.setTimeout(() => {
      targetSection.classList.remove('section-highlight')
    }, 1800)

    window.history.replaceState(null, '', projectLink)
  }

  return (
    <div className="project-card">
      {images.length > 0 && (
        <div className="project-image-preview" aria-label={`${title} image preview`}>
          {featured && <span className="featured-badge">Featured</span>}
          {images.map((image, idx) => (
            <img
              key={image}
              src={image}
              alt={idx === 0 ? `${title} placeholder` : ''}
              className="project-image"
              aria-hidden={idx === 0 ? undefined : 'true'}
            />
          ))}
        </div>
      )}
      <div className="project-header">
        <h3>{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-actions">
        {projectLink ? (
          <a
            href={projectLink}
            target={isProjectLinkExternal ? '_blank' : undefined}
            rel={isProjectLinkExternal ? 'noopener noreferrer' : undefined}
            onClick={handleProjectLinkClick}
            className="project-link project-link-primary"
          >
            View Project &rarr;
          </a>
        ) : (
          <span
            className="project-link project-link-primary project-link-disabled"
            aria-disabled="true"
            title="Project page coming soon"
          >
            View Project &rarr;
          </span>
        )}

        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-secondary"
          >
            View Code &rarr;
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
