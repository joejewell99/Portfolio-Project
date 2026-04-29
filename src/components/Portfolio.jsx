import './Portfolio.css'
import ProjectCard from './ProjectCard'

function Portfolio() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Vite and React showcasing projects and skills with a responsive design.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project Management App',
      description: 'A full-stack project management application with task tracking, user authentication, and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'An e-commerce platform featuring product catalog, shopping cart, payment integration, and order management.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with user authentication, message history, and typing indicators.',
      technologies: ['Socket.io', 'React', 'Node.js', 'Firebase'],
      link: '#'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Here are some of my recent projects</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
