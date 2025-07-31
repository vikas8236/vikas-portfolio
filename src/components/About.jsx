import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiCode, HiLightningBolt, HiAcademicCap, HiTrendingUp, HiArrowRight, HiStar, HiHeart, HiSparkles, HiCheckCircle } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [hoveredSkill, setHoveredSkill] = useState(null)

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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const stats = [
    { label: "Experience", value: "1.5+ Years", icon: "🚀", color: "from-blue-500 to-cyan-500" },
    { label: "Projects", value: "5+", icon: "💼", color: "from-green-500 to-emerald-500" },
    { label: "Technologies", value: "8+", icon: "⚡", color: "from-purple-500 to-pink-500" }
  ]

  const focusAreas = [
    {
      icon: <HiCode className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust APIs and scalable server architectures with Python & Django",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "LLM Evaluation",
      description: "Evaluating and optimizing AI models for production use with advanced techniques",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <HiAcademicCap className="w-8 h-8" />,
      title: "System Design",
      description: "Designing efficient and maintainable software systems and architectures",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <HiTrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and enhanced user experience",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ]

  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Django", level: 85, color: "from-green-400 to-green-600" },
    { name: "JavaScript", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "REST APIs", level: 88, color: "from-purple-400 to-purple-600" },
    { name: "PostgreSQL", level: 82, color: "from-indigo-400 to-indigo-600" },
    { name: "LLM Evaluation", level: 87, color: "from-pink-400 to-pink-600" }
  ]

  const keyStrengths = [
    { 
      text: "Problem-solving mindset with analytical approach",
      icon: <HiLightningBolt className="w-5 h-5 text-yellow-500" />
    },
    { 
      text: "Collaborative team player with strong communication",
      icon: <HiHeart className="w-5 h-5 text-red-500" />
    },
    { 
      text: "Continuous learner staying updated with latest tech",
      icon: <HiAcademicCap className="w-5 h-5 text-blue-500" />
    },
    { 
      text: "Detail-oriented with focus on code quality",
      icon: <HiCheckCircle className="w-5 h-5 text-green-500" />
    }
  ]

  const handleLetConnect = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden transition-all duration-300"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0] 
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                👨‍💻
              </motion.span>
              <span>Get to know me better</span>
              <HiSparkles className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white mb-6">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Me
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 text-yellow-400"
                >
                  <HiStar className="w-6 h-6" />
                </motion.div>
              </span>
            </h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about creating efficient solutions and evaluating cutting-edge AI technologies
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> with modern innovation</span>
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced Profile Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20 rounded-3xl p-8 overflow-hidden backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                
                {/* Background decoration */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl" />
                </div>

                {/* Profile Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    {/* Enhanced Avatar */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-32 h-32 mx-auto mb-6"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <span className="text-4xl font-black text-white relative z-10">VD</span>
                        
                        {/* Animated rings */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-white/20 rounded-full"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-2 border-2 border-white/10 rounded-full"
                        />
                        
                        {/* Status indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 bg-white rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">Vikas Dwivedi</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Software Engineer & LLM Specialist
                    </p>
                    
                    {/* Floating tech icons */}
                    <div className="absolute top-6 right-6 text-2xl animate-bounce">💻</div>
                    <div className="absolute bottom-6 left-6 text-2xl animate-pulse">🚀</div>
                    <div className="absolute top-1/2 left-4 text-xl animate-ping">⚡</div>
                  </div>

                  {/* Enhanced Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600"
                      >
                        <div className={`text-2xl mb-2 bg-gradient-to-r ${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-white text-lg">{stat.icon}</span>
                        </div>
                        <div className="text-lg font-black text-gray-800 dark:text-white">{stat.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Bio Section */}
              <div>
                <h3 className="text-3xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <HiSparkles className="w-5 h-5 text-white" />
                  </span>
                  Building the Future with Code
                </h3>
                
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> with expertise in backend development and LLM evaluation. 
                    My journey in tech has been driven by curiosity and a desire to solve complex problems through innovative solutions.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Currently working at <span className="font-semibold text-purple-600 dark:text-purple-400">Golden Eagle IT Technologies</span>, I've contributed to CMS migration projects 
                    and specialized in evaluating Large Language Models for Turing, ensuring AI systems meet 
                    production standards and deliver reliable results.
                  </motion.p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></span>
                  Technical Skills
                </h4>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ delay: 0.2 * index, duration: 0.8 }}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          {hoveredSkill === index && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-white/20 rounded-full"
                            />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Focus Areas Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <h4 className="text-3xl font-black text-gray-800 dark:text-white mb-12 text-center">
              What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Focus On</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`group relative p-8 ${area.bgColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`text-transparent bg-gradient-to-r ${area.color} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {area.icon}
                    </div>
                    <h5 className="font-black text-xl text-gray-800 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {area.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {area.description}
                    </p>
                  </div>
                  
                  {/* Hover effect elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-3 h-3 bg-gradient-to-r ${area.color} rounded-full animate-pulse`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Key Strengths */}
          <motion.div variants={itemVariants} className="mb-20">
            <h4 className="text-3xl font-black text-gray-800 dark:text-white mb-12 text-center">
              Core <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Strengths</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyStrengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.1 * index, duration: 0.8 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {strength.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              onClick={handleLetConnect}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-5 rounded-3xl font-black text-lg flex items-center gap-4 shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 mx-auto"
              aria-label="Contact Vikas Dwivedi"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              
              {/* Button content */}
              <span className="relative z-10">Let's Work Together</span>
              <HiArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Sparkle effects */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 text-yellow-300"
              >
                <HiSparkles className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Enhanced Achievement Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-700 dark:via-purple-700 dark:to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black mb-4">
                    Journey <span className="text-yellow-300">Highlights</span>
                  </h3>
                  <p className="text-blue-100 dark:text-blue-200 text-lg">
                    Continuous growth and impactful contributions
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[
                    { value: "1.5+", label: "Years Experience", desc: "Professional Growth" },
                    { value: "5+", label: "Projects Completed", desc: "Quality Delivered" },
                    { value: "8+", label: "Technologies Mastered", desc: "Continuous Learning" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ delay: 0.2 * index, duration: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="space-y-2"
                    >
                      <motion.div 
                        className="text-4xl font-black"
                        animate={{ 
                          textShadow: [
                            "0 0 10px rgba(255,255,255,0.5)",
                            "0 0 20px rgba(255,255,255,0.8)",
                            "0 0 10px rgba(255,255,255,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-blue-100 dark:text-blue-200 font-bold">{stat.label}</div>
                      <div className="text-blue-200 dark:text-blue-300 text-sm opacity-80">{stat.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 