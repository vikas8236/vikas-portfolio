import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiDatabase, HiCog, HiLightningBolt, HiGlobe, HiStar, HiSparkles } from 'react-icons/hi'
import { SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss3, SiDjango, SiPostgresql, SiRedis, SiDocker, SiGit } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skillCategories = [
    {
      category: "Languages",
      icon: <HiCode className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Core programming languages",
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600", experience: "2+ years" },
        { name: "JavaScript", level: 75, color: "from-yellow-300 to-orange-400", experience: "1+ years" },
        { name: "C++", level: 70, color: "from-blue-400 to-blue-600", experience: "Academic" },
        { name: "Java", level: 65, color: "from-red-400 to-red-600", experience: "Academic" },
        { name: "SQL", level: 80, color: "from-green-400 to-green-600", experience: "1.5+ years" }
      ]
    },
    {
      category: "Web Technologies",
      icon: <HiGlobe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Frontend and web development",
      skills: [
        { name: "HTML5", level: 85, color: "from-orange-400 to-red-500", experience: "2+ years" },
        { name: "CSS3", level: 80, color: "from-blue-400 to-blue-600", experience: "2+ years" },
        { name: "WebSocket", level: 70, color: "from-purple-400 to-purple-600", experience: "1+ years" },
        { name: "Google Auth", level: 75, color: "from-red-400 to-pink-500", experience: "1+ years" }
      ]
    },
    {
      category: "Frameworks",
      icon: <HiCog className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Development frameworks and libraries",
      skills: [
        { name: "Django", level: 85, color: "from-green-500 to-green-700", experience: "1.5+ years" },
        { name: "DRF", level: 80, color: "from-red-500 to-red-700", experience: "1+ years" },
        { name: "Wagtail", level: 75, color: "from-teal-400 to-teal-600", experience: "6 months" },
        { name: "Celery", level: 70, color: "from-green-400 to-lime-500", experience: "6 months" }
      ]
    },
    {
      category: "Databases",
      icon: <HiDatabase className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      description: "Database management systems",
      skills: [
        { name: "PostgreSQL", level: 85, color: "from-blue-500 to-blue-700", experience: "1.5+ years" },
        { name: "SQLite", level: 80, color: "from-gray-400 to-gray-600", experience: "2+ years" },
        { name: "Redis", level: 70, color: "from-red-500 to-red-700", experience: "1+ years" }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <HiLightningBolt className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      description: "Development and deployment tools",
      skills: [
        { name: "Docker", level: 75, color: "from-blue-400 to-blue-600", experience: "1+ years" },
        { name: "GitHub", level: 90, color: "from-gray-700 to-black", experience: "2+ years" },
        { name: "Poetry", level: 70, color: "from-purple-400 to-purple-600", experience: "1+ years" },
        { name: "Sentry", level: 65, color: "from-purple-500 to-pink-500", experience: "6 months" }
      ]
    },
    {
      category: "LLM & AI Tools",
      icon: <HiStar className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      description: "AI and machine learning technologies",
      skills: [
        { name: "Gemini", level: 85, color: "from-blue-400 to-purple-500", experience: "1+ years" },
        { name: "Claude", level: 80, color: "from-orange-400 to-red-500", experience: "1+ years" },
        { name: "Prompt Engineering", level: 90, color: "from-green-400 to-blue-500", experience: "1+ years" },
        { name: "Evaluation Workflows", level: 85, color: "from-purple-400 to-pink-500", experience: "1+ years" }
      ]
    }
  ]

  const additionalExpertise = [
    { name: "API Design", icon: "🔧", color: "from-blue-500 to-cyan-500" },
    { name: "System Architecture", icon: "🏗️", color: "from-purple-500 to-pink-500" },
    { name: "Performance Optimization", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Code Review", icon: "👁️", color: "from-green-500 to-emerald-500" },
    { name: "Agile Development", icon: "🚀", color: "from-red-500 to-pink-500" },
    { name: "Problem Solving", icon: "🧩", color: "from-indigo-500 to-purple-500" },
    { name: "Team Collaboration", icon: "👥", color: "from-teal-500 to-cyan-500" },
    { name: "Continuous Learning", icon: "📚", color: "from-orange-500 to-red-500" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCardVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const progressVariants = {
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

  return (
    <section 
      id="skills" 
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              <span>Technical Skills & Expertise</span>
              <HiSparkles className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white mb-6">
              Tech{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Arsenal
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
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full" />
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive expertise across modern development stack and
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> cutting-edge AI technologies</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  variants={skillCardVariants}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 h-full group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white leading-tight">
                        {category.category}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-800 dark:text-gray-200 font-bold text-sm md:text-base group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                              {skill.experience}
                            </span>
                            <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            variants={progressVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={skill.level}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Expertise */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-4">
                Additional{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Beyond technical skills, bringing value through comprehensive professional capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalExpertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group flex flex-col items-center p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Growth Statement */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl md:text-3xl font-black mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Continuous Learning & Innovation
                </motion.h3>
                
                <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-6 leading-relaxed">
                  "Technology evolves rapidly, and so do I. Always exploring new tools, 
                  frameworks, and methodologies to deliver cutting-edge solutions."
                </p>
                
                <div className="flex justify-center items-center gap-2">
                  {[1, 2, 3].map((dot, index) => (
                    <motion.div
                      key={index}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
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

export default Skills 