import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Joe's Portfolio</h1>
        <nav className="nav">
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
