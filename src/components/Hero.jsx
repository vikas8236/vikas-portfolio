import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center pt-20 md:pt-24 transition-all duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-700/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Hero Content */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800 dark:text-white mb-6 leading-tight">
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Vikas
                </span>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-1 -right-1 text-yellow-400"
                >
                  <HiSparkles className="w-4 h-4 md:w-6 md:h-6" />
                </motion.div>
              </span>
              <span className="text-gray-800 dark:text-white"> Dwivedi</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-4 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">Software Engineer</span> | 
              <span className="text-purple-600 dark:text-purple-400"> Backend Developer</span> | 
              <span className="text-indigo-600 dark:text-indigo-400"> LLM Evaluation</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building scalable solutions 
              <br className="hidden sm:block" />
              with modern technology
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <motion.a
            href="/resume.pdf"
            download="Vikas_Dwivedi_Resume.pdf"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Download resume PDF"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <FaDownload className="text-xl relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vikas-dwivedi-668328227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            aria-label="Connect on LinkedIn"
          >
            <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <FaLinkedin className="text-xl relative z-10" />
            <span className="relative z-10">Let's Connect</span>
          </motion.a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://github.com/vikas8236"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            aria-label="View Vikas Dwivedi's GitHub profile"
          >
            <FaGithub size={32} className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vikas-dwivedi-668328227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Connect with Vikas Dwivedi on LinkedIn"
          >
            <FaLinkedin size={32} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 