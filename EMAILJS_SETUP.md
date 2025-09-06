# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🎯 ¿Qué es EmailJS?
EmailJS permite enviar emails directamente desde tu frontend sin necesidad de un servidor backend. Es perfecto para formularios de contacto en portfolios.

## 🚀 Pasos de configuración:

### 1. **Crear cuenta en EmailJS**
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita (hasta 200 emails/mes)

### 2. **Configurar el servicio de email**
- En el dashboard, ve a **"Email Services"**
- Haz click en **"Add New Service"**
- Selecciona tu proveedor (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu email
- **Guarda el Service ID** (ejemplo: `service_abc123`)

### 3. **Crear template de email**
- Ve a **"Email Templates"**
- Haz click en **"Create New Template"**
- Configura el template así:

```
Subject: Nuevo mensaje de {{ from_name }} - {{ subject }}

From: {{ from_name }} ({{ from_email }})
Subject: {{ subject }}

Message:
{{ message }}

    ---
    Este mensaje fue enviado desde tu portfolio web.
```

- **Guarda el Template ID** (ejemplo: `template_xyz789`)

### 4. **Obtener Public Key**
- Ve a **"Account"** → **"General"**
- Copia tu **Public Key** (ejemplo: `user_abcdef123456`)

### 5. **Actualizar el código**
Edita el archivo `src/components/Contact.jsx` y reemplaza estas líneas:

```javascript
// Líneas 22-24, reemplaza con tus valores reales:
const serviceID = 'tu_service_id_aqui'      // De paso 2
const templateID = 'tu_template_id_aqui'    // De paso 3  
const publicKey = 'tu_public_key_aqui'      // De paso 4
```

### 6. **Ejemplo de configuración completa:**
```javascript
const serviceID = 'service_abc123'
const templateID = 'template_xyz789'  
const publicKey = 'user_abcdef123456'
```

## ✅ **Verificación**
1. Guarda los cambios y recarga tu portfolio
2. Prueba el formulario con un mensaje de test
3. Verifica que llegue el email a tu bandeja de entrada

## 🔧 **Alternativas si no quieres usar EmailJS:**

### **Opción 1: Formspree (Más simple)**
```javascript
// Reemplaza la función handleSubmit con:
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formspree.io/f/tu_form_id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

### **Opción 2: Solo redirección a email**
```javascript
// Función más simple que abre el cliente de email:
const handleSubmit = (e) => {
  e.preventDefault()
  const subject = encodeURIComponent(formData.subject)
  const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}
  `)
  
  window.location.href = `mailto:jlopezbarajas@gmail.com?subject=${subject}&body=${body}`
}
```

## 🎨 **Características implementadas:**
- ✅ Validación de formulario
- ✅ Loading spinner mientras envía
- ✅ Mensajes de éxito/error  
- ✅ Limpieza automática del formulario
- ✅ Diseño responsive
- ✅ Animaciones suaves

¡Tu formulario de contacto ya está listo! Solo necesitas configurar EmailJS con tus credenciales.
