import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Users, Award } from 'lucide-react'
import MSImg from '../assets/MS.jpg'
import PixelwareImg from '../assets/Pixelware.jpg'
import '../css/Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      id: 1,
      company: "Management Solutions",
      position: "Data Engineer Consultant",
      period: "Octubre 2022 - Actualidad",
      location: "Madrid, España",
      type: "Tiempo completo",
      image: MSImg,
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
      id: 2,
      company: "Pixelware",
      position: "Desarrollador Junior Full Stack",
      period: "Octubre 2021 - Febrero 2022",
      location: "Madrid, España",
      type: "Tiempo completo",
      image: PixelwareImg,
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
      grade: "Media: 7.04",
      achievements: [
        "Desarrollo de herramienta de inversión algorítmica basada en redes neuronales recurrentes (TFG)",
        "Desarrollo de app móvil con Android Studio para aprendizaje con Flashcards",
        "Desarrollo y despliegue de aplicación web con Django",
        "Desarrollo de aplicaciones multiprocesos con C"
      ]
    },
    {
      title: "Diplomatura en Artes Escénicas",
      institution: "Jana Producciones",
      period: "Septiembre 2018 - Junio 2021",
      grade: "",
      achievements: [
        "Comunicación efectiva",
        "Colaboración y trabajo en equipo",
        "Gestión del Estrés y Resiliencia",
        "Empatía y Perspectiva Humana"
      ]
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

        <div className="experience__content">
          {/* Experiencia Laboral */}
          <motion.div
            className="experience__section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="experience__section-title">
              <Users size={24} />
              Experiencia Laboral
            </h3>
            
            <div className="experience__timeline">
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
                      <h4 className="experience__item-position">{exp.position}</h4>
                      <h5 className="experience__item-company">{exp.company}</h5>
                      <div className="experience__item-meta">
                        <span className="experience__item-period">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="experience__item-location">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
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

          {/* Formación */}
          <motion.div
            className="experience__section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="experience__section-title">
              <Award size={24} />
              Formación Académica
            </h3>
            
            <div className="experience__education">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="experience__education-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                >
                  <div className="experience__education-header">
                    <h4 className="experience__education-title">{edu.title}</h4>
                    <h5 className="experience__education-institution">{edu.institution}</h5>
                    <div className="experience__education-meta">
                      <span className="experience__education-period">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="experience__education-grade">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="experience__education-achievements">
                    <h6>Logros destacados:</h6>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
