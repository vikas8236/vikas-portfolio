import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div variants={imageVariants} className="relative order-2 lg:order-1">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl transform rotate-6"></div>
                <div className="absolute inset-3 sm:inset-4 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 text-4xl sm:text-5xl md:text-6xl font-bold transform -rotate-6">
                  VD
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Software Engineer & LLM Specialist
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Results-driven Software Engineer with hands-on experience developing RESTful APIs, 
                backend development, and full-stack web applications. Proficient in Python, Django, 
                and modern web technologies. Delivered impactful work at Golden Eagle IT and Turing 
                across LLM evaluation and CMS development projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">🎯 Focus Areas</h4>
                  <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                    <li>• Backend Development</li>
                    <li>• LLM Evaluation</li>
                    <li>• API Design</li>
                    <li>• CMS Development</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">🚀 Key Strengths</h4>
                  <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                    <li>• Scalable Solutions</li>
                    <li>• AI Model Assessment</li>
                    <li>• Clean Code Practices</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
                  aria-label="Scroll to contact section to get in touch"
                >
                  <span>Let's Connect</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 