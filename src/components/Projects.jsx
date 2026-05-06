import './Projects.css'
import ProjectCard from './ProjectCard'
import AnimatedSectionTitle from './AnimatedSectionTitle'

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Vite and React to present my projects, skills, and contact details.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'EmailJS', 'AWS'],
      featured: true,
      imageFit: 'contain',
      images: [
        '/project-images/portfolio-website/home-page.png',
        '/project-images/portfolio-website/about-page.png',
        '/project-images/portfolio-website/experience-page.png',
        '/project-images/portfolio-website/projects-page.png',
        '/project-images/portfolio-website/contact-page.png'
      ],
      projectLink: '#home',
      codeLink: 'https://github.com/joejewell99/Portfolio-Project'
    },
    {
      title: 'Ad Auction Dashboard',
      description: 'A JavaFX analytics dashboard that processes ad auction CSV data into metrics and graphs for data analysis.',
      technologies: ['Java', 'JavaFX', 'Apache Maven', 'CSV Processing'],
      featured: true,
      imageFit: 'contain',
      images: [
        '/project-images/ad-auction-dashboard/ChartSectionHelp.jpg',
        '/project-images/ad-auction-dashboard/ClickHistogramHelp.jpg',
        '/project-images/ad-auction-dashboard/CompareMetricsHelp.jpg',
        '/project-images/ad-auction-dashboard/EditChartPageHelp.jpg',
        '/project-images/ad-auction-dashboard/LoginPageHelp.jpg',
        '/project-images/ad-auction-dashboard/BasicMetricsHelp.jpg'
      ],
      codeLink: 'https://github.com/joejewell99/Ad-Auction-Dashboard'
    },
    {
      title: 'TCP Network Storage System',
      description: 'A coursework project exploring networked storage using TCP connections, with a Java backend and browser-based interface.',
      technologies: ['Java', 'TCP', 'HTML', 'JavaScript', 'CSS'],
      imageFit: 'contain',
      images: [
        '/project-images/tcp-network-storage-system/controller-run-command.png',
        '/project-images/tcp-network-storage-system/dstore-command.png',
        '/project-images/tcp-network-storage-system/populate-files-command.png',
        '/project-images/tcp-network-storage-system/file-spread.png',
        '/project-images/tcp-network-storage-system/rebalancing.png',
        '/project-images/tcp-network-storage-system/storage-crash-cleanup.png'
      ],
      codeLink: 'https://github.com/joejewell99/TCPNetworkStorageSystem'
    },
    {
      title: 'JavaFX Tetrecs Game',
      description: 'A JavaFX Tetrecs game inspired by Tetris, built for a university project with custom game logic and styling.',
      technologies: ['Java', 'JavaFX', 'CSS', 'Game Logic'],
      featured: true,
      imageFit: 'contain',
      images: [
        '/project-images/javafx-tetrecs-game/home-page.png',
        '/project-images/javafx-tetrecs-game/game-Page.png',
        '/project-images/javafx-tetrecs-game/game-play-page.png',
        '/project-images/javafx-tetrecs-game/how-to-play-page.png',
        '/project-images/javafx-tetrecs-game/local-score-page.png'
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
          <AnimatedSectionTitle text="Projects" />
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
              imageFit={project.imageFit}
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
