import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Users, Lightbulb, Target, Zap, MessageSquare, RefreshCw } from 'lucide-react'
import '../css/Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 90 },
        { name: "Linux/Unix", level: 90 },
        { name: "Bash/Shell", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "CI/CD (GitLab/Jenkins)", level: 85 },
        { name: "Git", level: 95 },
        { name: "Automation", level: 90 },
        { name: "Testing (PyTest/GTest)", level: 80 },
        { name: "Monitoring", level: 75 }
      ]
    },
    {
      title: "Frontend & Full Stack",
      icon: <Brain size={24} />,
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "HTML/CSS", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "Database Design", level: 80 }
      ]
    }
  ]

  const softSkills = [
    {
      title: "Pensamiento Estratégico",
      description: "Desarrollo de soluciones escalables y arquitecturas robustas para sistemas empresariales críticos",
      icon: <Target size={20} />
    },
    {
      title: "Orientación al Cliente",
      description: "Experiencia directa en soporte y comunicación con clientes empresariales del sector financiero",
      icon: <Users size={20} />
    },
    {
      title: "Mentalidad Analítica",
      description: "Capacidad para analizar sistemas complejos y identificar soluciones eficientes en consultoría",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Adaptabilidad Técnica",
      description: "Transición exitosa entre proyectos de data engineering, consultoría y desarrollo backend crítico",
      icon: <RefreshCw size={20} />
    },
    {
      title: "Mejora Continua",
      description: "Implementación de procesos de automatización y optimización en entornos de desarrollo y producción",
      icon: <Zap size={20} />
    },
    {
      title: "Comunicación Técnica",
      description: "Traducción de conceptos técnicos complejos para stakeholders no técnicos en entornos corporativos",
      icon: <MessageSquare size={20} />
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
              <div
                key={index}
                className="skills__soft-item"
              >
                <div className="skills__soft-icon">
                  {skill.icon}
                </div>
                <h4 className="skills__soft-title">{skill.title}</h4>
                <p className="skills__soft-description">{skill.description}</p>
              </div>
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
