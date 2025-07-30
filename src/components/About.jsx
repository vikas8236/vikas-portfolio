import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiLightningBolt, HiAcademicCap, HiTrendingUp } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stats = [
    { number: "1.5+", label: "Years Experience", icon: <HiTrendingUp /> },
    { number: "5+", label: "Projects Completed", icon: <HiCode /> },
    { number: "8+", label: "Technologies Used", icon: <HiLightningBolt /> },
    { number: "100%", label: "Dedication", icon: <HiAcademicCap /> }
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
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
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Passionate
              </span>
              <br />
              <span className="text-gray-800">Developer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into scalable digital solutions with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Enhanced Profile Image Section */}
            <motion.div variants={imageVariants} className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                {/* Main image container */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Background decorative shapes */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl transform rotate-6 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl shadow-2xl transform -rotate-3 opacity-80" />
                    
                    {/* Profile placeholder */}
                    <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center text-gray-600 text-7xl font-black shadow-xl transform rotate-1">
                      VD
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg"
                    >
                      💻
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg"
                    >
                      🚀
                    </motion.div>
                  </div>
                </div>

                {/* Stats overlay */}
                                 <motion.div 
                   variants={statsVariants}
                   className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                 >
                   <div className="flex items-center gap-4">
                     <div className="text-center">
                       <div className="text-2xl font-black text-blue-600">1.5+</div>
                       <div className="text-xs text-gray-500 font-medium">Years</div>
                     </div>
                     <div className="w-px h-8 bg-gray-200" />
                     <div className="text-center">
                       <div className="text-2xl font-black text-green-600">5+</div>
                       <div className="text-xs text-gray-500 font-medium">Projects</div>
                     </div>
                     <div className="w-px h-8 bg-gray-200" />
                     <div className="text-center">
                       <div className="text-2xl font-black text-purple-600">8+</div>
                       <div className="text-xs text-gray-500 font-medium">Tech Stack</div>
                     </div>
                   </div>
                 </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                  <br />
                  <span className="text-gray-800">& LLM Specialist</span>
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Results-driven <strong>Software Engineer</strong> with hands-on experience developing RESTful APIs, 
                    backend development, and full-stack web applications. Proficient in <strong>Python, Django</strong>, 
                    and modern web technologies.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Delivered impactful work at <strong>Golden Eagle IT</strong> and <strong>Turing</strong> 
                    across LLM evaluation and CMS development projects, bringing innovative solutions to complex challenges.
                  </p>
                </div>
              </div>

              {/* Enhanced Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <HiCode className="text-white text-xl" />
                    </div>
                    <h4 className="font-black text-gray-800 text-lg">Focus Areas</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="font-medium">Backend Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="font-medium">LLM Evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="font-medium">API Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="font-medium">CMS Development</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <HiLightningBolt className="text-white text-xl" />
                    </div>
                    <h4 className="font-black text-gray-800 text-lg">Key Strengths</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="font-medium">Scalable Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="font-medium">AI Model Assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="font-medium">Clean Code Practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="font-medium">Problem Solving</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-xl hover:shadow-2xl"
                  aria-label="Scroll to contact section to get in touch"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10">Let's Connect</span>
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 