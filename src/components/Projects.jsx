import './Projects.css'
import ProjectCard from './ProjectCard'
import AnimatedSectionTitle from './AnimatedSectionTitle'

function Projects({ onOpenProject }) {
  const projects = [
    {
      title: 'SkillSignal',
      description: 'A deployed hiring SaaS using AI to connect employers with developers through proven project work.',
      summary: 'SkillSignal is a full-stack hiring SaaS that connects developers with employers using AI and evidence from their projects. It is aimed at students, junior developers, and people starting their careers who want to demonstrate their technical ability, alongside employers looking for developers with experience relevant to the work they need done. The website is deployed at skillsignal.co.uk and is available as a public beta.\n\nI built this project to give developers a way to bring their work together and explain the skills behind it. Users can create a profile, add their projects, upload screenshots, and include GitHub links and technical explanations of what they built. This gives employers a clearer view of their experience and the problems they have worked through, particularly when they have limited professional experience to put on a CV.\n\nThe platform works by taking a description of what an employer needs and comparing it against developer profiles and project evidence using AI-assisted matching. For example, an employer looking for help with a React dashboard and Spring Boot API can find developers who have built similar features. Results include ranked matches, relevant skills, and explanations of why each developer may be suitable. The website also features a searchable profile directory, separate developer and employer dashboards, connections, and messaging so users can follow up on a match.\n\nIn terms of development, I used React for the frontend, Java and Spring Boot for the backend, and PostgreSQL to store user accounts, profiles, projects, and messages. Spring Security provides role-based access control so users can only access the features and data they are authorised to use. Authentication uses an HttpOnly cookie with CSRF protection for requests that change data, and users can choose whether their profile is publicly visible. AI searches also have daily usage limits and a fallback if the AI service is unavailable.',
      highlights: [
        'AI matching that ranks developers against employer briefs and explains each match.',
        'Developer portfolios with project screenshots, GitHub links, and technical write-ups.',
        'Searchable developer profiles with separate dashboards for developers and employers.',
        'Connections and direct messaging to follow up on potential matches.',
        'Secure accounts with role-based access and profile visibility controls.'
      ],
      reflection: 'This project helped me bring together the frontend, backend, database, and deployment work needed for a complete web application. I developed my understanding of React, Spring Boot, and PostgreSQL by connecting features such as profile editing, project uploads, and messaging across the whole application. I also learned more about enforcing permissions on the backend and managing database changes as new features are added. Working with AI matching made me think more carefully about the evidence behind a result, how to explain it to users, and how to handle usage limits or failed requests. Taking SkillSignal through to a deployed beta also helped me understand the practical work involved in maintaining a website beyond running it locally.',
      cardTechnologies: ['React', 'Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'AI Matching'],
      technologies: ['React', 'JavaScript', 'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'OpenAI API', 'WebSocket / STOMP', 'Docker', 'Nginx'],
      featured: true,
      priority: 1,
      imageFit: 'contain',
      images: [
        '/project-images/skillsignal/heropage.png',
        '/project-images/skillsignal/1.png',
        '/project-images/skillsignal/2.png',
        '/project-images/skillsignal/3.png',
        '/project-images/skillsignal/4.png',
        '/project-images/skillsignal/5.png',
        '/project-images/skillsignal/Aimatchpage.png',
        '/project-images/skillsignal/aimatchprofiles.png',
        '/project-images/skillsignal/DevDashboard.png',
        '/project-images/skillsignal/profilespage.png',
        '/project-images/skillsignal/signin.png',
        '/project-images/skillsignal/getstarted.png',
        '/project-images/skillsignal/whyskillsignal.png'
      ],
      projectLink: 'https://skillsignal.co.uk',
      codeLink: 'https://github.com/joejewell99/SkillSignal'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Vite and React to present my projects, skills, and contact details.',
      summary: 'This portfolio brings my work, experience, and contact flow into one responsive React site with a consistent visual identity and project-focused browsing experience.',
      highlights: [
        'Reusable React components for sections, cards, animated headings, and project detail pages.',
        'Responsive CSS layout with a dark neon theme, glass panels, screenshot previews, and themed interactions.',
        'Contact flow prepared for EmailJS integration so visitors can reach out directly from the site.'
      ],
      reflection: 'This project helped me refine component structure, responsive styling, and the small visual details that make a portfolio feel complete rather than simply functional.',
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
      summary: 'This dashboard turns ad auction CSV files into clear metrics and visual charts, giving business users a focused way to inspect campaign performance and compare results.\n\nThis project was built for my software engineering group project where we used agile methodologies to design and build the dashboard around user needs and feedback. We were assigned a project reviewer who would act as the end user defining their requirements for the project. We met with the reviewer every week in order to demonstrate our agile workflow and progress with the project. \n\n The project works by processing data-heavy CSV files into more manageable data which is then displayed using JavaFX and JFreeChart into an organised and cohesive graph. The project features filtering mechanisms for deeper analysis such as, click rate of male users between certain times, or the bounce rate of users depending on their age group. It also includes a graph comparison feature and PDF saving for future reviewing. \n\n In terms of security, we use two-factor user authentication and a role-based access control system to ensure that only authorized users can access the dashboard and its features. We do this by implementing a user database with bcrypt for hashing and salting user passwords for an extra layer of security. ',
      highlights: [
        'CSV upload and analysis for ad auction data.',
        'Secure database-backed login system.',
        'PDF saving and printing for reports.',
        'Built iteratively using agile methodologies.'
      ],
      reflection: 'This project taught me how to integrate secure database-backed features, work effectively in an agile team environment, use feedback to improve a product, and process CSV files into meaningful data for users.',
      technologies: ['Java', 'JavaFX', 'Apache Maven', 'CSV Processing', 'bcrypt', '2FA'],
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
      description: 'A Java coursework project exploring distributed file storage using TCP connections between a client, controller, and multiple storage nodes.',
      summary: 'This project implements a TCP-based network storage system in Java, using persistent socket connections between a client, a central controller, and multiple storage nodes. The system allows files to be stored, retrieved, removed, and rebalanced across available storage nodes in a space-efficient and memory-safe way.\n\nThe project runs through terminal commands, where each component is started with specific arguments before forming TCP connections. The client sends file requests to the controller, and the controller coordinates the storage nodes responsible for handling those files. If a storage node crashes or becomes unavailable, the controller can respond by rebalancing the system and maintaining file availability across the remaining nodes.\n\nThe controller keeps track of file locations, storage node availability, and replication across the system. This means the client can make simple store, load, remove, and list requests while the controller handles the more complex coordination work behind the scenes. Running each component as a separate Java process helped simulate how distributed storage systems communicate, fail, and recover in a controlled environment.',
      highlights: [
        'Persistent TCP socket communication between client, controller, and storage nodes.',
        'Terminal-based commands for storing, retrieving, removing, and updating files.',
        'Controller-managed file distribution, node coordination, and request handling.',
        'Fault-aware rebalancing when storage nodes crash or become unavailable.'
      ],
      reflection: 'This project strengthened my understanding of TCP networking, socket programming, and how distributed systems coordinate work across multiple processes. It also taught me how to handle failure cases, maintain communication between services, and think more carefully about data availability and rebalancing logic.',
      technologies: ['Java', 'TCP Sockets', 'Client-Server Architecture', 'Distributed Systems', 'CLI'],
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
      summary: 'I built this Tetrecs game using heavy inspiration from the famous game Tetris, featuring core game mechanics like a scoreboard, lives, a timer, and thematic music. The game begins with a familiar home screen and space-like music, then transitions to either the instructions page, multiplayer page, or the main game in which players compete to be the best block-burster. \n\n The game involves a 5x5 grid, in which custom-shaped blocks must be placed on. The goal is to form 5 block lines in either the horizontal or vertical direction; doing so bursts the line and rewards the player with score based on how many lines they were able to form. The game has a countdown clock which causes the player to lose a life and the block to change upon running out. Players are limited to 3 lives but can rotate blocks displayed in the 3x3 grid to fit blocks into new areas. As the game progresses and the player\'s score increases, so does the level (+1 level per 1000 score); this causes the countdown timer to shorten giving the player a sense of urgency to make their next move. Once the player runs out of lives, the game finishes and they are taken to a scoreboard where they can input their name and see a list of local high scores. \n\nThis project used heavy game logic, JavaFX for animations, and CSS for styling along with listeners for controlling game state changes.',
      highlights: [
        '5x5 block-bursting gameplay with custom shapes and rotation.',
        'Scoreboard, lives, countdown timer, and level progression.',
        'Home, instructions, multiplayer, game, and local highscore screens.',
        'JavaFX animations, themed music, images, and CSS styling.'
      ],
      reflection: 'This project taught me how to set up a proper Apache Maven project, use listeners to manage game state, work through complex game logic problems, and use audio, images, and CSS styling to create an engaging gameplay experience.',
      technologies: ['Java', 'JavaFX', 'CSS', 'Game Logic', 'Apache Maven'],
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

    return (secondProject.priority || 0) - (firstProject.priority || 0)
      || firstProject.title.localeCompare(secondProject.title)
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
              project={project}
              title={project.title}
              description={project.description}
              technologies={project.cardTechnologies || project.technologies}
              featured={project.featured}
              images={project.images}
              imageFit={project.imageFit}
              projectLink={project.projectLink}
              codeLink={project.codeLink}
              onViewProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
