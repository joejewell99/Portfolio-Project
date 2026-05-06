import './Experience.css'

const timelineItems = [
  {
    meta: 'University',
    title: 'BSc (Hons) Computer Science - University of Southampton',
    highlight: 'Applying computer science through practical software projects',
    description:
      'Currently in Year 3 and on track for a 2:1. My studies have strengthened how I think about software engineering principles, secure design, and building maintainable systems.',
    tags: ['Computer Science', 'Software Engineering', 'Year 3', 'Software Design']
  },
  {
    meta: 'Relevant Modules',
    title: 'Core Computer Science Modules',
    description:
      'Completed a broad range of Computer Science modules, from programming and algorithms to security, machine learning, and distributed systems. My programming modules have mainly strengthened my Java development skills, while Haskell introduced a different way of thinking through functional programming.',
    tags: [
      'Programming 1-3',
      'Java',
      'Haskell',
      'Algorithms',
      'Cyber Security',
      'Philosophy of AI',
      'Machine Learning',
      'Software Engineering & Design',
      'Mathematics',
      'Networks & Distributed Systems',
      'Theory of Computing'
    ]
  },
  {
    meta: 'Project Experience',
    title: 'Coursework & Personal Projects',
    description:
      'Built personal and coursework projects including a JavaFX analytics dashboard, TCP network storage system, AI planner, JavaFX game, and this React portfolio, developing practical experience across frontend, backend, data handling, and networking.',
    tags: ['React', 'JavaFX', 'TCP', 'Data Handling'],
    action: {
      label: 'View project work',
      href: '#projects'
    }
  },
  {
    meta: 'College',
    title: 'Barton Peveril College',
    description:
      'Completed A Levels in Biology, Chemistry, and Mathematics, achieving straight As across all three subjects.',
    tags: ['Biology', 'Chemistry', 'Mathematics', 'Straight As']
  }
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Education & Direction</h2>
          <p>My academic background, current focus, and next steps</p>
        </div>

        <div className="experience-layout">
          <div className="experience-summary">
            <div className="experience-intro">
              <span className="section-kicker">Present</span>
              <h3>Computer Science student turning theory into working software.</h3>
              <p>
                My degree has given me a strong grounding in Java, software design,
                systems, networks, data, and security. Alongside that, I am taking
                the initiative to build with React, Spring Boot, PostgreSQL, and AWS,
                using personal projects to shape the kind of full-stack developer I
                want to become.
              </p>
            </div>

            <div className="experience-intro">
              <span className="section-kicker">Next step</span>
              <h3>Looking for practical development experience.</h3>
              <p>
                My next step is to keep building full-stack applications around real
                interests and real users, while gaining professional experience that
                helps me grow as a well-rounded software engineer.
              </p>
              <div className="summary-tags">
                <span>Full-Stack</span>
                <span>Problem Solving</span>
                <span>Team Learning</span>
              </div>
            </div>
          </div>

          <div className="timeline">
            {timelineItems.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <p className="timeline-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  {item.highlight && <p className="timeline-highlight">{item.highlight}</p>}
                  <p>{item.description}</p>
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.action && (
                    <a className="timeline-action" href={item.action.href}>
                      {item.action.label}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
