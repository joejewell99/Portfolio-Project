import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Vite and React to present my projects, skills, and contact details.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'EmailJS', 'AWS'],
      images: [
        'https://picsum.photos/seed/portfolio-website-1/800/500',
        'https://picsum.photos/seed/portfolio-website-2/800/500',
        'https://picsum.photos/seed/portfolio-website-3/800/500'
      ],
      projectLink: '#home',
      codeLink: 'https://github.com/joejewell99/Portfolio-Project'
    },
    {
      title: 'Ad Auction Dashboard',
      description: 'A JavaFX analytics dashboard that processes ad auction CSV data into metrics and graphs for data analysis.',
      technologies: ['Java', 'JavaFX', 'Apache Maven', 'CSV Processing'],
      featured: true,
      images: [
        'https://picsum.photos/seed/ad-auction-dashboard-1/800/500',
        'https://picsum.photos/seed/ad-auction-dashboard-2/800/500',
        'https://picsum.photos/seed/ad-auction-dashboard-3/800/500'
      ],
      codeLink: 'https://github.com/joejewell99/Ad-Auction-Dashboard'
    },
    {
      title: 'TCP Network Storage System',
      description: 'A coursework project exploring networked storage using TCP connections, with a Java backend and browser-based interface.',
      technologies: ['Java', 'TCP', 'HTML', 'JavaScript', 'CSS'],
      featured: true,
      images: [
        'https://picsum.photos/seed/tcp-network-storage-1/800/500',
        'https://picsum.photos/seed/tcp-network-storage-2/800/500',
        'https://picsum.photos/seed/tcp-network-storage-3/800/500'
      ],
      codeLink: 'https://github.com/joejewell99/TCPNetworkStorageSystem'
    },
    {
      title: 'AI Daily Planner',
      description: 'A Python daily planner that uses AI scheduling logic to help organise tasks from a to-do list into a practical day plan.',
      technologies: ['Python', 'AI Scheduling', 'Data Handling'],
      images: [
        'https://picsum.photos/seed/ai-daily-planner-1/800/500',
        'https://picsum.photos/seed/ai-daily-planner-2/800/500',
        'https://picsum.photos/seed/ai-daily-planner-3/800/500'
      ],
      codeLink: 'https://github.com/joejewell99/Ai-Daily-Planner'
    },
    {
      title: 'JavaFX Tetrecs Game',
      description: 'A JavaFX Tetrecs game inspired by Tetris, built for a university project with custom game logic and styling.',
      technologies: ['Java', 'JavaFX', 'CSS', 'Game Logic'],
      featured: true,
      images: [
        'https://picsum.photos/seed/javafx-tetrecs-game-1/800/500',
        'https://picsum.photos/seed/javafx-tetrecs-game-2/800/500',
        'https://picsum.photos/seed/javafx-tetrecs-game-3/800/500'
      ],
      codeLink: 'https://github.com/joejewell99/JavaFX-tetrecs-game'
    }
  ]

  const rankedProjects = [...projects].sort((firstProject, secondProject) => {
    const featuredRank = Number(Boolean(secondProject.featured)) - Number(Boolean(firstProject.featured))

    if (featuredRank !== 0) {
      return featuredRank
    }

    return firstProject.title.localeCompare(secondProject.title)
  })

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Here are some of my recent projects</p>
        </div>
        <div className="projects-grid">
          {rankedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              featured={project.featured}
              images={project.images}
              projectLink={project.projectLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
