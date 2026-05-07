import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetailPage from './components/ProjectDetailPage'
import './App.css'

function App() {
  const [activeProject, setActiveProject] = useState(null)

  const handleOpenProject = (project) => {
    setActiveProject(project)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseProject = () => {
    setActiveProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (activeProject) {
    return <ProjectDetailPage project={activeProject} onBack={handleCloseProject} />
  }

  return (
    <>
      <Header />
      <Hero />

      <About />
      <Experience />
      <Projects onOpenProject={handleOpenProject} />
      <Contact />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Joe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
