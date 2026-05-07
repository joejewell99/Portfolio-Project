import { useEffect, useState } from 'react'
import './ProjectCard.css'

function ProjectCard({
  project,
  title,
  description,
  technologies,
  featured = false,
  images = [],
  imageFit = 'cover',
  projectLink,
  codeLink,
  onViewProject
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const isProjectLinkExternal = projectLink?.startsWith('http')
  const isProjectLinkInternal = projectLink?.startsWith('#')

  useEffect(() => {
    if (!isCardHovered || images.length < 2) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [images.length, isCardHovered])

  const handleCardMouseEnter = () => {
    setIsCardHovered(true)
  }

  const handleCardMouseLeave = () => {
    setIsCardHovered(false)
    setActiveImageIndex(0)
  }

  const handleProjectLinkClick = (event) => {
    if (!isProjectLinkInternal) {
      if (onViewProject) {
        event.preventDefault()
        onViewProject(project)
      }

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
    <div
      className="project-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {images.length > 0 && (
        <div
          className="project-image-preview"
          data-image-fit={imageFit}
          aria-label={`${title} image preview`}
        >
          {featured && <span className="featured-badge">Featured</span>}
          {images.map((image, idx) => (
            <img
              key={image}
              src={image}
              alt={idx === 0 ? `${title} screenshot` : ''}
              className={`project-image ${idx === activeImageIndex ? 'project-image-active' : ''}`}
              aria-hidden={idx === 0 ? undefined : 'true'}
            />
          ))}
          {images.length > 1 && (
            <div className="project-image-dots">
              {images.map((image, idx) => (
                <button
                  key={`${image}-dot`}
                  type="button"
                  className={`project-image-dot ${idx === activeImageIndex ? 'project-image-dot-active' : ''}`}
                  aria-label={`Show ${title} screenshot ${idx + 1}`}
                  aria-pressed={idx === activeImageIndex}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>
          )}
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
        {onViewProject || projectLink ? (
          <a
            href={projectLink || '#'}
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
