import './About.css'

function About() {
  const skills = [
    'React',
    'Spring Boot',
    'PostgreSQL',
    'Git',
    'Haskell',
    'Python',
    'CSS/HTML',
    'Java'
  ]

  return (
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
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
