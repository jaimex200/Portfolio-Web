import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'
import PortfolioWebImg from '../assets/PortfolioWeb.jpg'
import TFGImg from '../assets/TFG.jpg'
import '../css/Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      id: 1,
      title: "Portfolio Web Personal",
      category: "Desarrollo Web",
      period: "Octubre 2023 - Actualidad",
      type: "Proyecto Personal",
      image: PortfolioWebImg,
      description: "Desarrollo de mi portfolio web personal utilizando React para mostrar mi experiencia profesional, proyectos y habilidades técnicas. Implementado con un diseño responsivo y moderno.",
      technologies: ["React", "CSS3", "JavaScript", "Vite", "Netlify"],
      achievements: [
        "Desarrollo completo del portfolio web con React",
        "Implementación de diseños responsivos con CSS3",
        "Despliegue automatizado mediante Netlify",
        "Control de versiones con Github",
        "Optimización para SEO y rendimiento"
      ],
      links: {
        live: "https://jaime-portfolio.netlify.app",
        github: "https://github.com/jaimex200/portfolio-web"
      },
      featured: true
    },
    {
      id: 2,
      title: "Herramienta de Inversión Algorítmica",
      category: "Machine Learning & IA",
      period: "Marzo 2022 - Diciembre 2022",
      type: "Trabajo Fin de Grado",
      image: TFGImg,
      description: "Desarrollo de una herramienta de inversión algorítmica basada en redes neuronales recurrentes (LSTM) para la predicción de precios de acciones y automatización de estrategias de trading.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "LSTM"],
      achievements: [
        "Implementación de redes neuronales LSTM para predicción temporal",
        "Desarrollo de algoritmos de trading automatizado",
        "Análisis de datos históricos del mercado bursátil",
        "Backtesting de estrategias de inversión",
        "Evaluación de rendimiento con métricas financieras"
      ],
      links: {
        github: "https://github.com/jaimex200/tfg-inversion-algoritmica"
      },
      featured: true
    },
    {
      id: 3,
      title: "App Móvil de Flashcards",
      category: "Desarrollo Móvil",
      period: "2021",
      type: "Proyecto Académico",
      image: null,
      description: "Desarrollo de una aplicación móvil educativa para Android utilizando Android Studio. La aplicación permite a los usuarios crear y gestionar flashcards para el aprendizaje mediante repetición espaciada.",
      technologies: ["Android Studio", "Java", "SQLite", "XML"],
      achievements: [
        "Desarrollo nativo para Android",
        "Implementación de base de datos local SQLite",
        "Diseño de interfaz de usuario intuitiva",
        "Sistema de repetición espaciada para optimizar el aprendizaje"
      ],
      links: {
        github: "https://github.com/jaimex200/flashcards-android"
      },
      featured: false
    },
    {
      id: 4,
      title: "Aplicación Web con Django",
      category: "Desarrollo Web",
      period: "2020-2021",
      type: "Proyecto Académico",
      image: null,
      description: "Desarrollo y despliegue de una aplicación web completa utilizando el framework Django. Proyecto colaborativo que incluyó desarrollo backend, frontend y base de datos.",
      technologies: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      achievements: [
        "Desarrollo full-stack con Django",
        "Implementación de sistema de autenticación",
        "Diseño y gestión de base de datos PostgreSQL",
        "Trabajo colaborativo en equipo",
        "Despliegue en producción"
      ],
      links: {
        github: "https://github.com/jaimex200/django-web-app"
      },
      featured: false
    },
    {
      id: 5,
      title: "Aplicaciones Multiproceso en C",
      category: "Programación de Sistemas",
      period: "2020",
      type: "Proyecto Académico",
      image: null,
      description: "Desarrollo de aplicaciones multiproceso utilizando el lenguaje C, implementando comunicación entre procesos, gestión de memoria y sincronización.",
      technologies: ["C", "POSIX", "Threads", "IPC", "Makefile"],
      achievements: [
        "Implementación de comunicación entre procesos",
        "Gestión eficiente de memoria y recursos",
        "Sincronización de threads y procesos",
        "Manejo de señales del sistema operativo"
      ],
      links: {
        github: "https://github.com/jaimex200/c-multiprocess-apps"
      },
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="projects__tag">Proyectos</span>
          <h2 className="projects__title">Mis trabajos destacados</h2>
          <p className="projects__subtitle">
            Una selección de proyectos que demuestran mi experiencia en desarrollo y tecnología
          </p>
        </motion.div>

        {/* Proyectos Destacados */}
        <motion.div
          className="projects__featured"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="projects__section-title">Proyectos Destacados</h3>
          <div className="projects__featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="projects__card projects__card--featured"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {project.image && (
                  <div className="projects__card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="projects__card-overlay">
                      <div className="projects__card-links">
                        {project.links.live && (
                          <a 
                            href={project.links.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projects__card-link"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projects__card-link"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="projects__card-content">
                  <div className="projects__card-header">
                    <span className="projects__card-category">{project.category}</span>
                    <div className="projects__card-meta">
                      <span className="projects__card-period">
                        <Calendar size={16} />
                        {project.period}
                      </span>
                      <span className="projects__card-type">
                        <Users size={16} />
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="projects__card-title">{project.title}</h4>
                  <p className="projects__card-description">{project.description}</p>
                  
                  <div className="projects__card-achievements">
                    <h5>Logros destacados:</h5>
                    <ul>
                      {project.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="projects__card-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="projects__tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Otros Proyectos */}
        <motion.div
          className="projects__other"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="projects__section-title">Otros Proyectos</h3>
          <div className="projects__other-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="projects__card projects__card--small"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="projects__card-content">
                  <div className="projects__card-header">
                    <div className="projects__card-title-row">
                      <h4 className="projects__card-title">{project.title}</h4>
                      <div className="projects__card-links">
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projects__card-link"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="projects__card-category">{project.category}</span>
                  </div>
                  
                  <p className="projects__card-description">{project.description}</p>
                  
                  <div className="projects__card-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="projects__tech-tag projects__tech-tag--small">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
