import './ProjectDetailPage.css'

function ProjectDetailPage({ project, onBack }) {
  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <button className="project-detail-back" type="button" onClick={onBack}>
          &larr; Back to portfolio
        </button>

        <section className="project-detail-placeholder">
          <p className="project-detail-kicker">Project page placeholder</p>
          <h1>{project.title}</h1>
          <p>
            This dedicated project page is ready to build out with screenshots,
            development notes, technical decisions, and outcomes.
          </p>
        </section>
      </div>
    </main>
  )
}

export default ProjectDetailPage
