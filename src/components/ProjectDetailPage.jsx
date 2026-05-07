import './ProjectDetailPage.css'

function ProjectDetailPage({ project, onBack }) {
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

  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <button className="project-detail-back" type="button" onClick={onBack}>
          &larr; Back to portfolio
        </button>

        <section className="project-detail-hero">
          <div className="project-detail-hero-copy">
            <p className="project-detail-kicker">Project case study</p>
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
                  Live Demo &rarr;
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
            <div className="project-detail-featured-image" data-image-fit={imageFit}>
              <img src={images[0]} alt={`${title} main screenshot`} />
            </div>
          )}
        </section>

        <div className="project-detail-grid">
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

        {images.length > 1 && (
          <section className="project-detail-gallery">
            <div className="project-detail-gallery-header">
              <p className="project-detail-section-label">Gallery</p>
              <h2>Project Screenshots</h2>
            </div>

            <div className="project-detail-gallery-grid">
              {images.slice(1).map((image, index) => (
                <figure
                  className="project-detail-gallery-item"
                  data-image-fit={imageFit}
                  key={image}
                >
                  <img src={image} alt={`${title} screenshot ${index + 2}`} />
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProjectDetailPage
