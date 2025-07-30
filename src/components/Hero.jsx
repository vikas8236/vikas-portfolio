import { motion } from 'framer-motion'
import { HiDownload, HiExternalLink } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Hero = () => {
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
        duration: 0.5
      }
    }
  }

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center relative z-10 max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-8 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="text-blue-600">Vikas</span> Dwivedi
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-medium mb-6 leading-relaxed px-2">
            Software Engineer | Backend Developer | LLM Evaluation
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed px-4">
            Building scalable backends and evaluating cutting-edge AI models.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            aria-label="Download Vikas Dwivedi's resume as PDF"
          >
            <HiDownload className="text-lg sm:text-xl" aria-hidden="true" />
            Download Resume
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vikas-dwivedi-668328227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            aria-label="Connect with Vikas Dwivedi on LinkedIn"
          >
            <FaLinkedin className="text-lg sm:text-xl" aria-hidden="true" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <motion.a
            href="https://github.com/vikas8236"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full p-2"
            aria-label="View Vikas Dwivedi's GitHub profile"
          >
            <FaGithub size={28} className="sm:w-8 sm:h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vikas-dwivedi-668328227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-2"
            aria-label="Connect with Vikas Dwivedi on LinkedIn"
          >
            <FaLinkedin size={28} className="sm:w-8 sm:h-8" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 