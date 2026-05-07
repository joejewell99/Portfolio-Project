import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleHomeClick = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${isScrolled ? ' header-scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">
          <a href="#home" onClick={handleHomeClick} className="logo-link" aria-label="Joe Jewell portfolio home">
            <span className="logo-mark-shell" aria-hidden="true">
              <img src="/logo.png" alt="" className="logo-mark" />
            </span>
            <span className="logo-text">
              <span className="logo-name">Joe.J</span>
            </span>
          </a>
        </h1>
        <nav className="nav">
          <ul>
            <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/SoftwareEngResume.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
