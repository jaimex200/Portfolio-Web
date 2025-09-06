import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Users, Lightbulb, Target } from 'lucide-react'
import '../css/Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Tecnologías & Frameworks",
      icon: <Database size={24} />,
      skills: [
        { name: "React", level: 85 },
        { name: "SAS", level: 80 },
        { name: "Git", level: 90 },
        { name: "Spring Boot", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "Django", level: 75 }
      ]
    },
    {
      title: "Especialización",
      icon: <Brain size={24} />,
      skills: [
        { name: "Redes Neuronales", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Engineering", level: 90 },
        { name: "ETL Processes", level: 85 },
        { name: "Abstract Thinking", level: 95 },
        { name: "Programación OOP", level: 90 }
      ]
    }
  ]

  const softSkills = [
    {
      title: "Liderazgo",
      description: "Capacidad de liderar proyectos tecnológicos y equipos multidisciplinarios",
      icon: <Target size={20} />
    },
    {
      title: "Aprendizaje Rápido",
      description: "Adaptación ágil a nuevas tecnologías y metodologías de trabajo",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva en entornos multiculturales y diversos",
      icon: <Users size={20} />
    },
    {
      title: "Comunicación",
      description: "Interacción efectiva con clientes y stakeholders técnicos y no técnicos",
      icon: <Users size={20} />
    },
    {
      title: "Escucha Activa",
      description: "Comprensión profunda de necesidades y requerimientos del cliente",
      icon: <Users size={20} />
    },
    {
      title: "Autodidacta",
      description: "Capacidad de autoaprendizaje y mejora continua",
      icon: <Lightbulb size={20} />
    }
  ]

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Profesional" }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="skills__tag">Habilidades</span>
          <h2 className="skills__title">Tecnologías y competencias</h2>
          <p className="skills__subtitle">
            Un conjunto diverso de habilidades técnicas y blandas desarrolladas a lo largo de mi carrera
          </p>
        </motion.div>

        {/* Habilidades Técnicas */}
        <motion.div
          className="skills__technical"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="skills__section-title">Habilidades Técnicas</h3>
          <div className="skills__categories">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skills__category"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + (categoryIndex * 0.1), duration: 0.8 }}
              >
                <div className="skills__category-header">
                  {category.icon}
                  <h4>{category.title}</h4>
                </div>
                <div className="skills__list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skills__item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.05), 
                        duration: 0.6 
                      }}
                    >
                      <div className="skills__item-header">
                        <span className="skills__item-name">{skill.name}</span>
                        <span className="skills__item-percentage">{skill.level}%</span>
                      </div>
                      <div className="skills__item-bar">
                        <motion.div
                          className="skills__item-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.6 + (categoryIndex * 0.1) + (skillIndex * 0.05), 
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          className="skills__soft"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="skills__section-title">Habilidades Interpersonales</h3>
          <div className="skills__soft-grid">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skills__soft-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="skills__soft-icon">
                  {skill.icon}
                </div>
                <h4 className="skills__soft-title">{skill.title}</h4>
                <p className="skills__soft-description">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div
          className="skills__languages"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h3 className="skills__section-title">Idiomas</h3>
          <div className="skills__languages-grid">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="skills__language-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
              >
                <span className="skills__language-name">{language.name}</span>
                <span className="skills__language-level">{language.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
