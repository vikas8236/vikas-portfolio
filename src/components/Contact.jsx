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
  HiCheckCircle,
  HiClock,
  HiStar,
  HiGlobe
} from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa'

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
  const [submitStatus, setSubmitStatus] = useState(null)

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
      const mailtoLink = `mailto:V8236014408@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  const contactStats = [
    { icon: <HiClock />, label: "Response Time", value: "< 24 hours", color: "from-blue-500 to-cyan-500" },
    { icon: <HiStar />, label: "Projects Completed", value: "5+", color: "from-green-500 to-teal-500" },
    { icon: <HiGlobe />, label: "Availability", value: "Global Remote", color: "from-purple-500 to-pink-500" }
  ]

  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      label: "Email",
      value: "V8236014408@gmail.com",
      href: "mailto:V8236014408@gmail.com",
      ariaLabel: "Send email to Vikas Dwivedi",
      color: "from-red-500 to-pink-500",
      description: "Preferred for detailed discussions"
    },
    {
      icon: <HiPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 8839034415",
      href: "tel:+918839034415",
      ariaLabel: "Call Vikas Dwivedi",
      color: "from-green-500 to-teal-500",
      description: "Available 9 AM - 8 PM IST"
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      label: "Location",
      value: "India",
      href: null,
      ariaLabel: "Location: India",
      color: "from-blue-500 to-indigo-500",
      description: "Open to global opportunities"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/vikas-dwivedi-668328227/",
      color: "hover:text-blue-600",
      bgColor: "from-blue-600 to-blue-700",
      ariaLabel: "Connect with Vikas Dwivedi on LinkedIn",
      followers: "500+"
    },
    {
      name: "GitHub", 
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/vikas8236",
      color: "hover:text-gray-800",
      bgColor: "from-gray-700 to-gray-900",
      ariaLabel: "View Vikas Dwivedi's GitHub profile",
      followers: "50+"
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full opacity-5 blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Let's Work
              </span>
              <br />
              <span className="text-white">Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life? Let's discuss how we can collaborate 
              to create something amazing together.
            </p>
          </motion.div>

          {/* Contact Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-r ${stat.color} p-6 rounded-3xl text-center shadow-2xl`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm font-medium opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Enhanced Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  innovative projects, and potential collaborations. 
                  Whether you're looking for backend development, LLM evaluation, 
                  or technical consultation, I'd love to hear from you.
                </p>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{contact.label}</p>
                        </div>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            aria-label={contact.ariaLabel}
                            className="text-white hover:text-blue-400 transition-colors font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded break-all group-hover:text-blue-400"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white font-bold text-lg" aria-label={contact.ariaLabel}>
                            {contact.value}
                          </p>
                        )}
                        <p className="text-gray-400 text-sm mt-1">{contact.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="text-xl font-black mb-6 text-white">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group bg-gradient-to-r ${social.bgColor} p-6 rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{social.name}</div>
                          <div className="text-white/80 text-sm">{social.followers} followers</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                    Send a Message
                  </span>
                </h3>
                
                {/* Enhanced Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl flex items-center gap-3 shadow-lg"
                  >
                    <HiCheckCircle className="text-2xl flex-shrink-0" />
                    <span className="font-semibold">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl flex items-center gap-3 shadow-lg"
                  >
                    <HiExclamationCircle className="text-2xl flex-shrink-0" />
                    <span className="font-semibold">There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-3">
                        Name *
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
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
                          className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm ${
                            errors.name ? 'border-red-400' : 'border-white/20 hover:border-white/40'
                          }`}
                          placeholder="Your Name"
                        />
                      </div>
                      {errors.name && (
                        <p id="name-error" className="mt-2 text-sm text-red-400 font-medium" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-3">
                        Email *
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
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
                          className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm ${
                            errors.email ? 'border-red-400' : 'border-white/20 hover:border-white/40'
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-400 font-medium" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-300 mb-3">
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
                      className={`w-full px-4 py-4 bg-white/10 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm ${
                        errors.subject ? 'border-red-400' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="Project Discussion"
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-2 text-sm text-red-400 font-medium" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-3">
                      Message *
                    </label>
                    <div className="relative">
                      <HiChatAlt className="absolute left-4 top-4 text-gray-400 text-lg" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        rows={5}
                        className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-gray-400 resize-none transition-all duration-300 backdrop-blur-sm ${
                          errors.message ? 'border-red-400' : 'border-white/20 hover:border-white/40'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-400 font-medium" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`group relative overflow-hidden w-full py-4 px-8 rounded-2xl font-black flex items-center justify-center gap-3 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg shadow-2xl ${
                      isSubmitting 
                        ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 cursor-pointer'
                    } text-white`}
                    aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <HiPaperAirplane className={`text-xl relative z-10 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <p className="text-gray-300 text-lg mb-4">
                © 2024 Vikas Dwivedi. Built with React & Tailwind CSS.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>Made with ❤️ in India</span>
                <span>•</span>
                <span>Always open to new opportunities</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 