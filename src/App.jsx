import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />

      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p>
              I'm a passionate full-stack developer with experience in building modern web applications.
              I specialize in React, Node.js, and Python, with a focus on creating clean, efficient code
              and exceptional user experiences.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Git</span>
                <span>Haskell</span>
                <span>Python</span>
                <span>CSS/HTML</span>
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <Contact />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Joe's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
