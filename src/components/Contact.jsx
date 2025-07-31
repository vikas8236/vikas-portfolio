import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiStar, HiGlobe, HiCheckCircle, HiExclamation, HiSparkles } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

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
      bgColor: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      description: "Preferred for detailed discussions"
    },
    {
      icon: <HiPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 8839034415",
      href: "tel:+918839034415",
      ariaLabel: "Call Vikas Dwivedi",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      description: "Available 9 AM - 8 PM IST"
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      label: "Location",
      value: "India (Remote)",
      href: null,
      ariaLabel: "Location: India (Remote)",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      description: "Open to global opportunities"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/vikas-dwivedi-668328227/",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-600 to-blue-700",
      description: "Professional network",
      followers: "500+ connections"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/vikas8236",
      color: "from-gray-700 to-gray-900",
      bgColor: "from-gray-700 to-gray-900",
      description: "Code repositories",
      followers: "Growing portfolio"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-2xl" />,
      url: "#",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-400 to-blue-500",
      description: "Tech discussions",
      followers: "Tech community"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden transition-all duration-300" 
      ref={ref}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-700/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/50 dark:to-purple-900/50 text-pink-700 dark:text-pink-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                📞
              </motion.span>
              <span>Get In Touch</span>
              <HiSparkles className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white mb-6">
              Let's{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Work Together
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 text-yellow-400"
                >
                  <HiStar className="w-6 h-6" />
                </motion.div>
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6 rounded-full" />
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to bring your next project to life? Let's discuss how we can collaborate to
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> create something amazing together</span>
            </motion.p>
          </motion.div>

          {/* Contact Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-r ${stat.color} p-6 rounded-3xl text-center shadow-2xl relative overflow-hidden group`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{stat.value}</h3>
                    <p className="text-white/80 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <HiMail className="w-5 h-5 text-white" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`group p-6 bg-gradient-to-r ${info.bgColor} rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        aria-label={info.ariaLabel}
                        className="flex items-start gap-4 text-decoration-none"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                            {info.label}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                            {info.label}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <h4 className="text-2xl font-black text-gray-800 dark:text-white mb-6">Connect on Social</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`group relative flex items-center gap-3 bg-gradient-to-r ${social.bgColor} text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-bold">{social.name}</div>
                        <div className="text-xs opacity-80">{social.followers}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-3xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <HiMail className="w-5 h-5 text-white" />
                  </div>
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === 'success'
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                        : 'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <HiExclamation className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="font-semibold">
                      {submitStatus === 'success'
                        ? 'Message sent successfully! Opening your email client...'
                        : 'Something went wrong. Please try again or contact directly via email.'}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                        placeholder="Your full name"
                        required
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-semibold">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="What's this about?"
                      required
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-semibold">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 resize-vertical ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      required
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-semibold">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white font-black py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <HiMail className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Footer */}
          <motion.div variants={itemVariants} className="text-center pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-700 dark:via-purple-700 dark:to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-lg md:text-xl font-bold mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  © 2024 Vikas Dwivedi. Crafted with passion and precision.
                </motion.p>
                
                <p className="text-pink-100 dark:text-pink-200 text-base md:text-lg">
                  Let's build something amazing together ✨
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 