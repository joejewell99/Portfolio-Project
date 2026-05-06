import './About.css'

function About() {
  const skillGroups = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C', 'C#', 'Haskell']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Spring Boot']
    },
    {
      title: 'Data & Web',
      skills: ['MySQL', 'PostgreSQL', 'HTML', 'CSS']
    },
    {
      title: 'Tools & Concepts',
      skills: ['Git', 'Software Design', 'TCP/UDP Networks']
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-copy">
            <p>
              I'm Joe, a third-year Computer Science student at the University of
              Southampton, expected to graduate in 2027 with a predicted 2:1. I'm
              interested in gaining practical experience across frontend, backend,
              or full-stack development, with a particular focus on building web
              applications using React and Spring Boot.
            </p>
            <p>
              I enjoy creating software that is useful, reliable, and easy to work
              with, whether that means designing clean user interfaces, building
              backend services, or connecting the two into a complete application.
              Through university and personal projects, I've worked with Java,
              Python, React, databases, networking, and software design.
            </p>
            <p>
              I'm currently looking for opportunities where I can contribute to
              real projects, learn from experienced developers, and keep growing
              as a software engineer.
            </p>
          </div>
          <aside className="about-sidebar" aria-label="About summary and skills">
            <div className="focus-card">
              <span className="focus-kicker">Current focus</span>
              <h3>React + Spring Boot web apps</h3>
              <p>
                I am focused on building full-stack web apps with React, Spring
                Boot, and PostgreSQL, and taking them through to deployment using AWS.
              </p>
              <div className="focus-list">
                <span>React</span>
                <span>Spring Boot</span>
                <span>Full-stack web apps</span>
                <span>User experience</span>
                <span>AWS deployment</span>
                <span>Practical experience</span>
              </div>
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <div className="skills-grid">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
