import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Users, Award, Briefcase, TrendingUp, Target, GraduationCap, BookOpen, Star } from 'lucide-react'
import MSImg from '../assets/MS.jpg'
import LynxImg from '../assets/LynxTech.jpg'
import PixelwareImg from '../assets/Pixelware.jpg'
import '../css/Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      id: 1,
      company: "Lynx Tech",
      position: "Software Engineer (Backend)",
      period: "Marzo 2024 - Actualidad",
      duration: "11 meses",
      location: "Madrid, España",
      type: "Tiempo completo",
      image: LynxImg,
      keyMetrics: [
        { label: "Entornos gestionados", value: "3", icon: Target },
        { label: "Uptime crítico", value: "99.9%", icon: TrendingUp },
        { label: "Tecnologías", value: "9+", icon: Briefcase }
      ],
      responsibilities: [
        "Desarrollo backend en C y Python, con scripting en Bash en entornos Linux",
        "Diseño e implementación de pipelines de CI/CD principalmente con GitLab y uso puntual de Jenkins",
        "Automatización de despliegues de aplicaciones en Docker, mejorando la reproducibilidad y facilidad de mantenimiento",
        "Ejecución de tests unitarios con Google Test (C) y PyTest (Python)",
        "Resolución de incidencias en entornos de producción críticos de banca (prevención de fraude)",
        "Soporte directo a cliente, incluyendo monitorización de tres entornos y resolución de incidencias de primer nivel"
      ],
      achievements: [
        "Implementación de despliegue en Docker de la aplicación core, habilitando un proceso de entrega más ágil y estandarizado",
        "Mantenimiento proactivo en sistemas críticos de prevención de fraude, evitando caídas en entornos de producción bancarios",
        "Participación en tareas de soporte al cliente, asegurando la continuidad de negocio en sistemas de alta disponibilidad"
      ],
      technologies: ["C", "Python", "Bash", "Linux", "Docker", "GitLab CI/CD", "Jenkins", "Google Test", "PyTest"]
    },
    {
      id: 2,
      company: "Management Solutions",
      position: "Data Engineer Consultant",
      period: "Octubre 2022 - Marzo 2024",
      duration: "1 año 6 meses",
      location: "Madrid, España",
      type: "Tiempo completo",
      image: MSImg,
      keyMetrics: [
        { label: "Reducción de costes", value: "43%", icon: TrendingUp },
        { label: "Proyectos liderados", value: "5+", icon: Target },
        { label: "Sector", value: "Seguros", icon: Briefcase }
      ],
      responsibilities: [
        "Liderazgo en proyectos tecnológicos en el sector asegurador",
        "Análisis de datos y desarrollo de modelos",
        "Manejo de bases de datos SQL",
        "Evaluación de necesidades de los clientes para desarrollar casos de uso",
        "Implementación de soluciones tecnológicas para automatización y monitorización",
        "Interacción completa con el cliente en todos los proyectos"
      ],
      achievements: [
        "Desarrollo del índice climático actuarial en Python",
        "Desarrollo de bases de datos con Access SQL",
        "Implementación de modelos de prima pura utilizando GLM",
        "Automatización y monitorización de ETLs área controlling (IFRS-17)",
        "Análisis y reducción de costes corporativos en un 43%"
      ],
      technologies: ["Python", "SQL", "GLM", "ETL", "IFRS-17"]
    },
    {
      id: 3,
      company: "Pixelware",
      position: "Desarrollador Junior Full Stack",
      period: "Octubre 2021 - Febrero 2022",
      duration: "5 meses",
      location: "Madrid, España",
      type: "Tiempo completo",
      image: PixelwareImg,
      keyMetrics: [
        { label: "Rol", value: "Full Stack", icon: Briefcase },
        { label: "Incidencias", value: "20+", icon: Target },
        { label: "Stack", value: "Java/Vue", icon: TrendingUp }
      ],
      responsibilities: [
        "Solución de incidencias en aplicaciones internas de la empresa",
        "Implementación y optimización de funcionalidad en aplicaciones internas"
      ],
      achievements: [
        "Solución de errores de Spring Boot en multiprocesos conectados a la base de datos",
        "Optimización de características del Front-end con Vue.js"
      ],
      technologies: ["Spring Boot", "Vue.js", "Java", "JavaScript"]
    }
  ]

  const education = [
    {
      title: "Grado en Ingeniería Informática",
      institution: "Universidad Autónoma de Madrid",
      period: "Septiembre 2018 - Diciembre 2022",
      duration: "4 años",
      grade: "7.04",
      gradeMax: "10",
      type: "Grado Universitario",
      icon: GraduationCap,
      highlights: [
        { label: "Especialización", value: "Software & IA" },
        { label: "TFG", value: "Redes Neuronales" },
        { label: "Nivel", value: "Grado" }
      ],
      achievements: [
        "Desarrollo de herramienta de inversión algorítmica basada en redes neuronales recurrentes (TFG)",
        "Desarrollo de app móvil con Android Studio para aprendizaje con Flashcards",
        "Desarrollo y despliegue de aplicación web con Django",
        "Desarrollo de aplicaciones multiprocesos con C"
      ],
      skills: ["Python", "Java", "C", "Django", "Android", "Machine Learning", "Algoritmos", "Bases de Datos"]
    },
    {
      title: "Diplomatura en Artes Escénicas",
      institution: "Jana Producciones",
      period: "Septiembre 2018 - Junio 2021",
      duration: "3 años",
      grade: "",
      gradeMax: "",
      type: "Formación Complementaria",
      icon: Star,
      highlights: [
        { label: "Enfoque", value: "Soft Skills" },
        { label: "Área", value: "Comunicación" },
        { label: "Modalidad", value: "Presencial" }
      ],
      achievements: [
        "Comunicación efectiva",
        "Colaboración y trabajo en equipo",
        "Gestión del Estrés y Resiliencia",
        "Empatía y Perspectiva Humana"
      ],
      skills: ["Comunicación", "Trabajo en Equipo", "Gestión del Estrés", "Empatía", "Presentaciones", "Liderazgo"]
    }
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience__container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="experience__tag">Experiencia</span>
          <h2 className="experience__title">Mi trayectoria profesional</h2>
          <p className="experience__subtitle">
            Más de 3 años construyendo soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        {/* Experiencia Laboral Section - Full Width First */}
        <motion.div
          className="experience__work-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="experience__section-title">
            <Briefcase size={24} />
            Experiencia Laboral
          </h3>
          
          <div className="experience__work-grid">
            {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="experience__item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
                >
                  <div className="experience__item-header">
                    <div className="experience__item-image">
                      <img src={exp.image} alt={exp.company} />
                    </div>
                    <div className="experience__item-info">
                      <div className="experience__item-title-row">
                        <div>
                          <h4 className="experience__item-position">{exp.position}</h4>
                          <h5 className="experience__item-company">{exp.company}</h5>
                        </div>
                        <span className="experience__item-duration">{exp.duration}</span>
                      </div>
                      <div className="experience__item-meta">
                        <span className="experience__item-period">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="experience__item-location">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="experience__item-type">
                          <Briefcase size={16} />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Metrics Section */}
                  <div className="experience__item-metrics">
                    {exp.keyMetrics.map((metric, idx) => (
                      <div key={idx} className="experience__metric-card">
                        <metric.icon size={20} className="experience__metric-icon" />
                        <div className="experience__metric-content">
                          <div className="experience__metric-value">{metric.value}</div>
                          <div className="experience__metric-label">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="experience__item-content">
                    <div className="experience__item-responsibilities">
                      <h6>Responsabilidades:</h6>
                      <ul>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="experience__item-achievements">
                      <h6>Logros destacados:</h6>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="experience__item-technologies">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="experience__tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formación Académica Section - Full Width Second */}
        <motion.div
          className="experience__education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="experience__section-title">
            <GraduationCap size={24} />
            Formación Académica
          </h3>
          
          <div className="experience__education-grid">
            {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="experience__education-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                >
                  <div className="experience__education-header">
                    <div className="experience__education-icon-wrapper">
                      <edu.icon size={32} className="experience__education-icon" />
                    </div>
                    <div className="experience__education-main">
                      <div className="experience__education-title-row">
                        <div>
                          <span className="experience__education-type">{edu.type}</span>
                          <h4 className="experience__education-title">{edu.title}</h4>
                          <h5 className="experience__education-institution">{edu.institution}</h5>
                        </div>
                        {edu.grade && (
                          <div className="experience__education-grade-badge">
                            <div className="experience__education-grade-value">
                              {edu.grade}<span>/{edu.gradeMax}</span>
                            </div>
                            <div className="experience__education-grade-label">Nota Media</div>
                          </div>
                        )}
                      </div>
                      <div className="experience__education-meta">
                        <span className="experience__education-period">
                          <Calendar size={16} />
                          {edu.period}
                        </span>
                        <span className="experience__education-duration">
                          <BookOpen size={16} />
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education Highlights */}
                  <div className="experience__education-highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="experience__education-highlight">
                        <span className="experience__highlight-label">{highlight.label}:</span>
                        <span className="experience__highlight-value">{highlight.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="experience__education-achievements">
                    <h6>Logros destacados:</h6>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills gained */}
                  <div className="experience__education-skills">
                    <h6>Competencias adquiridas:</h6>
                    <div className="experience__education-skills-list">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="experience__education-skill-tag">{skill}</span>
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

export default Experience
