import './Contact.css'

function Contact() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('joejewell99@hotmail.com')
    alert('Email copied to clipboard!')
  }

  const handlePhoneClick = () => {
    navigator.clipboard.writeText('+44 7543 802263')
    alert('Phone number copied to clipboard!')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's build something amazing together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <p>I'm always interested in hearing about new projects and opportunities.</p>
          </div>
          
          <div className="contact-links">
            <a 
              href="https://linkedin.com/in/joejewell99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link linkedin"
              title="Visit LinkedIn"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.818 0-9.735h3.554v1.378c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.733 1.39 3.733 4.379v5.588zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.192 0 1.915.756 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.582 11.597H3.635V9.172h3.284v11.28zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/joejewell99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link github"
              title="Visit GitHub"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <button 
              className="contact-link email"
              onClick={handleEmailClick}
              title="Copy email address"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>joejewell99@hotmail.com</span>
            </button>

            <button 
              className="contact-link phone"
              onClick={handlePhoneClick}
              title="Copy phone number"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.37.26 2.67.74 3.87a1 1 0 01-.27 1.11l-2.2 2.2z"/>
              </svg>
              <span>+44 7543 802263</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
