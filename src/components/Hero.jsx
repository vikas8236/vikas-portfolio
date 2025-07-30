import { motion } from 'framer-motion'
import { HiDownload, HiExternalLink, HiSparkles } from 'react-icons/hi'
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
    >
      {/* Enhanced Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated background shapes */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-24 h-24 bg-indigo-300 rounded-full opacity-25 blur-xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-15 blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center relative z-10 max-w-6xl"
      >
        {/* Main heading with enhanced typography */}
        <motion.div variants={itemVariants} className="mb-8 px-4">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-800 mb-6 leading-tight">
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Vikas
                </span>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 text-yellow-400"
                >
                  <HiSparkles className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              </span>
              <br />
              <span className="text-gray-800">Dwivedi</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-bold mb-4 leading-relaxed">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <span className="text-gray-600"> | </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Backend Developer
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                LLM Evaluation Specialist
              </span>
            </h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Building scalable backends and evaluating cutting-edge AI models
              <br />
              <span className="text-blue-600 font-semibold">One solution at a time</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg overflow-hidden"
            aria-label="Download Vikas Dwivedi's resume as PDF"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <HiDownload className="text-xl relative z-10" aria-hidden="true" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vikas-dwivedi-668328227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50 text-lg backdrop-blur-sm"
            aria-label="Connect with Vikas Dwivedi on LinkedIn"
          >
            <FaLinkedin className="text-xl group-hover:text-blue-600 transition-colors" aria-hidden="true" />
            <span>Let's Connect</span>
            <HiExternalLink className="text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            aria-label="View Vikas Dwivedi's GitHub profile"
          >
            <FaGithub size={32} className="text-gray-700 group-hover:text-gray-900 transition-colors" />
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
            className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Connect with Vikas Dwivedi on LinkedIn"
          >
            <FaLinkedin size={32} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </motion.a>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 