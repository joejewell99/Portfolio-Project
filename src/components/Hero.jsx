import './Hero.css'
import profileImage from '../assets/github-profile.png'
import reactIcon from '../assets/react.svg'
import AnimatedText from './AnimatedText'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            I'm <AnimatedText text="Joe" className="highlight hero-name" />.
            <span className="hero-title-line">I build full-stack web apps.</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer |{' '}
            <span className="hero-stack">
              <svg className="spring-mark" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.3 3.7c-4.9.2-8.6 1.7-11.1 4.3-2.3 2.4-3.1 5.4-2.4 8.3L3.3 19a.9.9 0 0 0 1.3 1.2l2.5-2.6c2.8 1.1 6.1.4 8.7-2.1 2.7-2.6 4.1-6.4 4.3-11.2 0-.4-.3-.7-.8-.6Zm-4.9 10.5c-1.8 1.7-4.1 2.3-6.1 1.7 2.2-2.1 4.7-4 7.6-5.6-2.4.5-5.3 2-8.3 4.6-.2-1.9.5-3.8 2-5.3 1.8-1.9 4.6-3.1 8.5-3.5-.5 3.7-1.7 6.4-3.7 8.1Z" />
              </svg>
              Spring Boot & React
              <img src={reactIcon} alt="" className="react-mark" aria-hidden="true" />
            </span>
          </p>
          <p className="hero-description">
            I deliver practical, user-focused web applications with reliable backends,
            clean user interfaces, and software that creates real customer value.
          </p>
          <div className="hero-actions">
            <a
              href="/SoftwareEngResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Download CV
            </a>

            <div className="hero-socials" aria-label="Quick contact links">
              <a
                href="mailto:joejewell99@hotmail.com"
                className="hero-social-link"
                aria-label="Email Joe"
                title="Email Joe"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/joejewell99"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>

              <a
                href="https://github.com/joejewell99"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.45 11.45 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <div className="hero-image-frame" aria-hidden="true">
              <img src={profileImage} alt="Joseph Jewell profile photo" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
