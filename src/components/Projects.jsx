import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Vite and React to present my projects, skills, and contact details.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
      image: 'https://picsum.photos/seed/portfolio-website/800/500',
      link: 'https://github.com/joejewell99/Portfolio-Project'
    },
    {
      title: 'Ad Auction Dashboard',
      description: 'A JavaFX analytics dashboard that processes ad auction CSV data into metrics and graphs for data analysis.',
      technologies: ['Java', 'JavaFX', 'Apache Maven', 'CSV Processing'],
      image: 'https://picsum.photos/seed/ad-auction-dashboard/800/500',
      link: 'https://github.com/joejewell99/Ad-Auction-Dashboard'
    },
    {
      title: 'TCP Network Storage System',
      description: 'A coursework project exploring networked storage using TCP connections, with a Java backend and browser-based interface.',
      technologies: ['Java', 'TCP', 'HTML', 'JavaScript', 'CSS'],
      image: 'https://picsum.photos/seed/tcp-network-storage/800/500',
      link: 'https://github.com/joejewell99/TCPNetworkStorageSystem'
    },
    {
      title: 'AI Daily Planner',
      description: 'A Python daily planner that uses AI scheduling logic to help organise tasks from a to-do list into a practical day plan.',
      technologies: ['Python', 'AI Scheduling', 'Data Handling'],
      image: 'https://picsum.photos/seed/ai-daily-planner/800/500',
      link: 'https://github.com/joejewell99/Ai-Daily-Planner'
    },
    {
      title: 'JavaFX Tetrecs Game',
      description: 'A JavaFX Tetrecs game inspired by Tetris, built for a university project with custom game logic and styling.',
      technologies: ['Java', 'JavaFX', 'CSS', 'Game Logic'],
      image: 'https://picsum.photos/seed/javafx-tetrecs-game/800/500',
      link: 'https://github.com/joejewell99/JavaFX-tetrecs-game'
    }
  ]

  return (
    <section id="projects" className="projects">
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
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
