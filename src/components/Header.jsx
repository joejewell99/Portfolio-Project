import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><a href="#home" className="logo-link">Joe's Portfolio</a></h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
