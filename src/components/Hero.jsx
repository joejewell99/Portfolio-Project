import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Joe</span></h1>
          <p className="hero-subtitle">Spring Boot & React Developer</p>
          <p className="hero-description">
            Building scalable web applications with clean code and exceptional design.
          </p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <div className="hero-image-frame" aria-hidden="true">
              <img src="https://cataas.com/cat" alt="Random cat image" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
