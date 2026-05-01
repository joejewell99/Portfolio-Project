import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />

      <About />
      <Experience />
      <Portfolio />
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
