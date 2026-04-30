import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <h1 className="logo"><a href="#home" className="logo-link">Joe's Portfolio</a></h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="/SoftwareEngResume.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
