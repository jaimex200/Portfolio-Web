import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutImg from '../assets/aboutPhoto2.jpg'
import '../css/About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about__text">
            <motion.span
              className="about__tag"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Sobre mí
            </motion.span>
            
            <motion.h2
              className="about__title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Construyendo el futuro con datos y código
            </motion.h2>
            
            <motion.div
              className="about__description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>
                Soy un <strong>Ingeniero Informático</strong> con enfoque especializado en 
                <strong> Ingeniería de Datos e Inteligencia Artificial</strong>. Mi pasión por 
                la tecnología me ha llevado a desarrollar una sólida base académica y una 
                experiencia práctica diversa.
              </p>
              <p>
                Tengo un <strong>fuerte deseo de crecer y contribuir</strong> en proyectos 
                tecnológicos innovadores. Me motiva especialmente la búsqueda de soluciones 
                que combinen análisis de datos, automatización y desarrollo full stack.
              </p>
              <p>
                Busco formar parte de equipos donde pueda combinar mi pasión por la tecnología, 
                mis conocimientos técnicos, y seguir aprendiendo de profesionales experimentados 
                en un ambiente colaborativo y desafiante.
              </p>
            </motion.div>

            <motion.div
              className="about__highlights"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="about__highlight">
                <span className="about__highlight-number">3+</span>
                <span className="about__highlight-text">Años de experiencia</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-number">15+</span>
                <span className="about__highlight-text">Proyectos completados</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-number">2</span>
                <span className="about__highlight-text">Idiomas</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="about__image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="about__image-container">
              <img src={aboutImg} alt="Jaime Muñoz López-Barajas" />
              <div className="about__image-overlay"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
