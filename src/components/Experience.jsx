import './Experience.css'

const timelineItems = [
  {
    meta: 'University',
    title: 'BSc Computer Science - University of Southampton',
    highlight: 'Expected Graduation 2027 | Predicted 2:1',
    description:
      'Third-year Computer Science student building a strong foundation across software engineering, computer systems, networks, security, data, and machine learning.',
    tags: ['Computer Science', 'Third Year']
  },
  {
    meta: 'Relevant Modules',
    title: 'Technical Study Areas',
    description:
      'Completed modules across algorithms, Java programming, computer systems, networks and security, software design, data management, mathematics, professional development, machine learning, software engineering, theory of computing, distributed systems and networks, and cyber security.',
    tags: ['Algorithms', 'Java', 'Machine Learning', 'Cyber Security', 'Distributed Systems']
  },
  {
    meta: 'Project Experience',
    title: 'Coursework & Personal Projects',
    description:
      'Built applications such as an ad auction analytics dashboard, TCP network storage system, AI daily planner, JavaFX game, and this React portfolio.',
    tags: ['React', 'JavaFX', 'TCP', 'Data Handling']
  },
  {
    meta: 'College',
    title: 'Barton Peveril College',
    description:
      'Completed A Levels in Biology, Chemistry, and Mathematics, achieving A grades across all three subjects.',
    tags: ['A Biology', 'A Chemistry', 'A Mathematics']
  }
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Education & Experience</h2>
          <p>My academic background, project work, and technical growth</p>
        </div>

        <div className="experience-layout">
          <div className="experience-summary">
            <div className="experience-intro">
              <span className="section-kicker">Current focus</span>
              <h3>Computer Science student turning theory into working software.</h3>
              <p>
                I am in my third year at the University of Southampton, studying BSc
                Computer Science with an expected graduation in 2027 and a predicted
                2:1. My work combines academic study with practical projects across
                web development, Java applications, networking, data, and security.
              </p>
            </div>

            <div className="experience-intro">
              <span className="section-kicker">Next step</span>
              <h3>Looking for practical development experience.</h3>
              <p>
                I am interested in opportunities where I can contribute to real
                software, learn from experienced developers, and keep improving as a
                full-stack engineer.
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
