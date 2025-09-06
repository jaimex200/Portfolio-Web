import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import '../css/Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ¡Hola! Soy
          </motion.span>
          
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Jaime Muñoz
            <span className="hero__name-full"> López-Barajas</span>
          </motion.h1>
          
          <motion.h2
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Software Engineer (Backend) & Data Engineer
          </motion.h2>
          
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Software Engineer especializado en desarrollo backend con C y Python. 
            Experiencia en sistemas críticos de banca, CI/CD, y automatización con Docker.
          </motion.p>
          
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              className="hero__cta-primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos
            </button>
            <button
              className="hero__cta-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </button>
          </motion.div>
          
          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="https://github.com/jaimex200" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/jaime-muñoz-lópez-barajas" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jlopezbarajas@gmail.com" className="hero__social-link">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            className="hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={() => scrollToSection('about')}
          >
            <span>Conoce más</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
