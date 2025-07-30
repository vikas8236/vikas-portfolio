import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane,
  HiUser,
  HiChatAlt,
  HiExclamationCircle,
  HiCheckCircle
} from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validateForm = useCallback(() => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }, [formData])

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      return
    }
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:V8236014408@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Open mailto link
      window.location.href = mailtoLink
      
      // Set success status and reset form
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  const contactInfo = [
    {
      icon: <HiMail className="text-xl sm:text-2xl" />,
      label: "Email",
      value: "V8236014408@gmail.com",
      href: "mailto:V8236014408@gmail.com",
      ariaLabel: "Send email to Vikas Dwivedi"
    },
    {
      icon: <HiPhone className="text-xl sm:text-2xl" />,
      label: "Phone",
      value: "+91 8839034415",
      href: "tel:+918839034415",
      ariaLabel: "Call Vikas Dwivedi"
    },
    {
      icon: <HiLocationMarker className="text-xl sm:text-2xl" />,
      label: "Location",
      value: "India",
      href: null,
      ariaLabel: "Location: India"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl sm:text-2xl" />,
      href: "https://www.linkedin.com/in/vikas-dwivedi-668328227/",
      color: "hover:text-blue-600",
      ariaLabel: "Connect with Vikas Dwivedi on LinkedIn"
    },
    {
      name: "GitHub", 
      icon: <FaGithub className="text-xl sm:text-2xl" />,
      href: "https://github.com/vikas8236",
      color: "hover:text-gray-800",
      ariaLabel: "View Vikas Dwivedi's GitHub profile"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto px-4">
              Ready to bring your next project to life? Let's discuss how we can collaborate 
              to create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  innovative projects, and potential collaborations. 
                  Whether you're looking for backend development, LLM evaluation, 
                  or technical consultation, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800 rounded-lg"
                  >
                    <div className="text-blue-500" aria-hidden="true">{contact.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          aria-label={contact.ariaLabel}
                          className="text-white hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded text-sm sm:text-base break-all"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm sm:text-base" aria-label={contact.ariaLabel}>
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-gray-400 ${social.color} transition-colors p-2 sm:p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Send a Message</h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <HiCheckCircle className="text-lg sm:text-xl flex-shrink-0" />
                    <span className="text-sm sm:text-base">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <HiExclamationCircle className="text-lg sm:text-xl flex-shrink-0" />
                    <span className="text-sm sm:text-base">There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors text-sm sm:text-base ${
                            errors.name ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="Your Name"
                        />
                      </div>
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs sm:text-sm text-red-400" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors text-sm sm:text-base ${
                            errors.email ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-400" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors text-sm sm:text-base ${
                        errors.subject ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Project Discussion"
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs sm:text-sm text-red-400" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <HiChatAlt className="absolute left-3 top-3 text-gray-400 text-sm sm:text-base" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        rows={4}
                        className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-colors text-sm sm:text-base ${
                          errors.message ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs sm:text-sm text-red-400" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-3 sm:py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm sm:text-base ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    } text-white`}
                    aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                  >
                    <HiPaperAirplane className={`text-base sm:text-lg ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Vikas Dwivedi. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 