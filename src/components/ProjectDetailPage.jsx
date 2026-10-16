import { useEffect, useState } from 'react'
import './ProjectDetailPage.css'

function ProjectDetailPage({ project, onBack }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const {
    title,
    description,
    technologies = [],
    images = [],
    imageFit = 'cover',
    projectLink,
    codeLink,
    summary,
    highlights = [],
    reflection
  } = project

  const projectSummary = summary || description
  const projectHighlights = highlights.length > 0
    ? highlights
    : [
        'Focused project structure based on the requirements and available technologies.',
        'Reusable implementation patterns that can be expanded with more project-specific detail.',
        'Clear visual presentation with screenshots, stack details, and supporting notes.'
      ]
  const projectReflection = reflection || 'This project gave me a stronger understanding of planning, implementing, and presenting a complete piece of technical work.'

  const isExternalProjectLink = projectLink?.startsWith('http')
  const hasProjectLink = projectLink && !projectLink.startsWith('#')
  const hasActiveImage = activeImageIndex !== null
  const activeImage = hasActiveImage ? images[activeImageIndex] : null
  const galleryImages = title === 'SkillSignal'
    ? images.map((image, imageIndex) => ({ image, imageIndex }))
    : images.slice(1).map((image, index) => ({ image, imageIndex: index + 1 }))

  const openImageViewer = (imageIndex) => {
    setActiveImageIndex(imageIndex)
  }

  const closeImageViewer = () => {
    setActiveImageIndex(null)
  }

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return (currentIndex - 1 + images.length) % images.length
    })
  }

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return (currentIndex + 1) % images.length
    })
  }

  useEffect(() => {
    if (!hasActiveImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImageViewer()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasActiveImage, images.length])

  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <button className="project-detail-back" type="button" onClick={onBack}>
          &larr; Back to portfolio
        </button>

        <section className="project-detail-hero">
          <div className="project-detail-hero-copy">
            <p className="project-detail-kicker">
              {title === 'SkillSignal' ? 'Live full-stack SaaS website' : 'Project case study'}
            </p>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="project-detail-actions">
              {hasProjectLink && (
                <a
                  href={projectLink}
                  target={isExternalProjectLink ? '_blank' : undefined}
                  rel={isExternalProjectLink ? 'noopener noreferrer' : undefined}
                  className="project-detail-link project-detail-link-primary"
                >
                  {title === 'SkillSignal' ? 'Visit Live Beta' : 'Live Demo'} &rarr;
                </a>
              )}

              {codeLink && (
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail-link"
                >
                  GitHub &rarr;
                </a>
              )}
            </div>
          </div>

          {images.length > 0 && (
            <button
              className="project-detail-featured-image project-detail-image-button"
              data-image-fit={imageFit}
              type="button"
              onClick={() => openImageViewer(0)}
              aria-label={`Open ${title} main screenshot`}
            >
              <img src={images[0]} decoding="async" alt={`${title} main screenshot`} />
            </button>
          )}
        </section>

        <div className={`project-detail-grid${title === 'SkillSignal' ? ' project-detail-grid-saas' : ''}`}>
          <section className="project-detail-panel project-detail-panel-large">
            <p className="project-detail-section-label">Overview</p>
            <h2>Project Summary</h2>
            <p className="project-detail-summary">{projectSummary}</p>
          </section>

          <aside className="project-detail-panel">
            <p className="project-detail-section-label">Stack</p>
            <h2>Technologies</h2>
            <div className="project-detail-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </aside>

          <section className="project-detail-panel">
            <p className="project-detail-section-label">Build Notes</p>
            <h2>Key Features</h2>
            <ul className="project-detail-list">
              {projectHighlights.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-panel">
            <p className="project-detail-section-label">Reflection</p>
            <h2>What I Learned</h2>
            <p>{projectReflection}</p>
          </section>
        </div>

        {galleryImages.length > 0 && (
          <section className="project-detail-gallery">
            <div className="project-detail-gallery-header">
              <p className="project-detail-section-label">Gallery</p>
              <h2>Project Screenshots</h2>
            </div>

            <div className="project-detail-gallery-grid">
              {galleryImages.map(({ image, imageIndex }) => (
                <button
                  className="project-detail-gallery-item"
                  data-image-fit={imageFit}
                  key={image}
                  type="button"
                  onClick={() => openImageViewer(imageIndex)}
                  aria-label={`Open ${title} screenshot ${imageIndex + 1}`}
                >
                  <img src={image} loading="lazy" decoding="async" alt={`${title} screenshot ${imageIndex + 1}`} />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {hasActiveImage && (
        <div
          className="project-image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
        >
          <button
            className="project-image-viewer-backdrop"
            type="button"
            onClick={closeImageViewer}
            aria-label="Close image viewer"
          />

          <div className="project-image-viewer-content">
            <div className="project-image-viewer-toolbar">
              <p>{activeImageIndex + 1} / {images.length}</p>
              <button type="button" onClick={closeImageViewer} aria-label="Close image viewer">
                &times;
              </button>
            </div>

            {images.length > 1 && (
              <button
                className="project-image-viewer-arrow project-image-viewer-arrow-left"
                type="button"
                onClick={showPreviousImage}
                aria-label="Show previous screenshot"
              >
                &larr;
              </button>
            )}

            <img src={activeImage} alt={`${title} screenshot ${activeImageIndex + 1}`} />

            {images.length > 1 && (
              <button
                className="project-image-viewer-arrow project-image-viewer-arrow-right"
                type="button"
                onClick={showNextImage}
                aria-label="Show next screenshot"
              >
                &rarr;
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default ProjectDetailPage
