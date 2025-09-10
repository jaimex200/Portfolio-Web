import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react'
import emailjs from '@emailjs/browser'
import '../css/Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDownloadCV = () => {
    // Opción 1: Archivo PDF estático
    const link = document.createElement('a')
    link.href = '/cv-jaime-munoz.pdf'  // Archivo temporal de prueba
    link.download = 'CV-Jaime-Munoz-Lopez-Barajas.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Opcional: Google Analytics event
    // gtag('event', 'download', { 'event_category': 'CV' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Configuración de EmailJS
    const serviceID = 'service_e8hbdjd' // Reemplazar con tu Service ID de EmailJS
    const templateID = 'template_qkrafw6' // Reemplazar con tu Template ID de EmailJS
    const publicKey = 'N8-jZt9gaNpKDnF3j' // Reemplazar con tu Public Key de EmailJS

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jaime Muñoz',
        },
        publicKey
      )

      console.log('Email enviado:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Limpiar el estado de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)

    } catch (error) {
      console.error('Error al enviar email:', error)
      setSubmitStatus('error')
      
      // Limpiar el estado de error después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "jlopezbarajas@gmail.com",
      link: "mailto:jlopezbarajas@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación",
      value: "Madrid, España",
      link: null
    },
    {
      icon: <Phone size={24} />,
      title: "Disponibilidad",
      value: "Disponible para proyectos",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/jaimex200",
      color: "#333"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/jaime-munoz-lopez-barajas2000/",
      color: "#0077B5"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:jlopezbarajas@gmail.com",
      color: "#EA4335"
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact__tag">Contacto</span>
          <h2 className="contact__title">¿Hablamos?</h2>
          <p className="contact__subtitle">
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            No dudes en contactarme si quieres colaborar o simplemente charlar sobre tecnología.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Información de contacto */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="contact__info-content">
              <h3 className="contact__info-title">Información de contacto</h3>
              <p className="contact__info-description">
                Siempre dispuesto a escuchar nuevas propuestas y oportunidades de colaboración.
              </p>

              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact__info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                  >
                    <div className="contact__info-icon">
                      {info.icon}
                    </div>
                    <div className="contact__info-details">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Redes sociales */}
              <motion.div
                className="contact__social"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h4 className="contact__social-title">Sígueme en:</h4>
                <div className="contact__social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--color': social.color }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Botón de CV */}
              <motion.div
                className="contact__cv"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <button 
                  className="contact__cv-button"
                  onClick={handleDownloadCV}
                >
                  <Download size={20} />
                  Descargar CV
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="contact__form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Envíame un mensaje</h3>
              
              <div className="contact__form-row">
                <motion.div
                  className="contact__form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </motion.div>

                <motion.div
                  className="contact__form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                className="contact__form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿De qué quieres hablar?"
                />
              </motion.div>

              <motion.div
                className="contact__form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntame más sobre tu proyecto o idea..."
                  rows="5"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="contact__form-submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </motion.button>

              {/* Mensajes de estado */}
              {submitStatus && (
                <motion.div
                  className={`contact__form-status ${submitStatus === 'success' ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus === 'success' ? (
                    <span>✅ ¡Mensaje enviado correctamente! Te contactaré pronto.</span>
                  ) : (
                    <span>❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta directamente por email.</span>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="contact__footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>© 2024 Jaime Muñoz López-Barajas. Hecho con ❤️ en Madrid.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
