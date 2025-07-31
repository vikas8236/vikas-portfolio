import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiStar, HiLightningBolt, HiCalendar, HiBriefcase, HiCheckCircle, HiSparkles, HiTrendingUp, HiCog, HiCode } from 'react-icons/hi'
import { SiDjango, SiPython, SiPostgresql, SiDocker } from 'react-icons/si'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [activeCard, setActiveCard] = useState(null)

  const experiences = [
    {
      id: 1,
      company: "Golden Eagle IT Technologies Pvt. Ltd.",
      logo: "🦅",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      location: "Remote",
      companyType: "Technology Company",
      teamSize: "10+ Engineers",
      positions: [
        {
          title: "Software Engineer",
          period: "Jan 2025 - Present",
          duration: "Present",
          type: "Full-time",
          description: "Leading backend development and LLM evaluation projects with focus on scalable solutions and AI model optimization.",
          achievement: "Successfully delivered CMS migration and LLM evaluation projects",
          responsibilities: [
            "Led backend API development using Django REST framework",
            "Implemented scalable microservices architecture",
            "Conducted comprehensive LLM model evaluations",
            "Optimized database performance and queries"
          ]
        },
        {
          title: "Software Engineer Trainee", 
          period: "Jun - Dec 2024",
          duration: "6 months",
          type: "Trainee",
          description: "Intensive training program focusing on full-stack development and modern web technologies.",
          achievement: "Accelerated Learning Path & Backend Development",
          responsibilities: [
            "Completed intensive training in Python and Django",
            "Built RESTful APIs and database integrations",
            "Collaborated on team projects using Agile methodology",
            "Gained expertise in version control and deployment"
          ]
        }
      ],
      highlights: [
        "Wagtail CMS migration and optimization",
        "Dynamic page rendering implementation", 
        "REST API development and integration",
        "LLM Evaluation and Training for Turing projects",
        "Gemini and Claude model evaluations",
        "Prompt design and evaluation workflows",
        "Performance optimization and scaling",
        "Cross-functional team collaboration"
      ],
      technologies: ["Python", "Django", "Wagtail CMS", "REST API", "PostgreSQL", "LLM Evaluation", "Prompt Engineering", "Docker"],
      techIcons: {
        "Python": <SiPython className="text-yellow-500" />,
        "Django": <SiDjango className="text-green-600" />,
        "PostgreSQL": <SiPostgresql className="text-blue-600" />,
        "Docker": <SiDocker className="text-blue-500" />
      },
      impact: "Successfully delivered CMS migration and LLM evaluation projects",
      metrics: {
        projectsDelivered: "5+",
        performanceImprovement: "40%",
        clientSatisfaction: "100%"
      }
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  const cardVariants = {
    hover: {
      scale: 1.02,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden transition-all duration-300"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl"
        />
        
        {/* Floating work-related icons */}
        {[
          { icon: "💼", x: "15%", y: "20%" },
          { icon: "🚀", x: "85%", y: "30%" },
          { icon: "⚡", x: "20%", y: "70%" },
          { icon: "🎯", x: "80%", y: "80%" },
          { icon: "💡", x: "50%", y: "15%" }
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-15, -30, -15],
              x: [-5, 5, -5],
              rotate: [0, 10, -10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
            className="absolute text-2xl"
            style={{ left: item.x, top: item.y }}
          >
            {item.icon}
          </motion.div>
        ))}
        
        {/* Enhanced Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-700/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                💼
              </motion.span>
              <span>Professional Journey & Growth</span>
              <HiSparkles className="w-4 h-4" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white mb-6">
              Work{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Experience
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 text-yellow-400"
                >
                  <HiStar className="w-6 h-6" />
                </motion.div>
              </span>
            </h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Building innovative solutions and contributing to cutting-edge projects
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> with passion and excellence</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Timeline line */}
            <motion.div 
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1"
            >
              <div className="h-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 rounded-full relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                />
              </div>
            </motion.div>

            <div className="space-y-20">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setActiveCard(exp.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Enhanced Timeline dot */}
                  <motion.div 
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-20"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                      <span className="text-sm relative z-10">{exp.logo}</span>
                      
                      {/* Pulsing ring effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full`}
                      />
                    </div>
                  </motion.div>

                  {/* Enhanced Experience Card - Fixed Center Alignment */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="ml-20 md:ml-0 flex justify-center"
                  >
                    <div className="w-full max-w-4xl">
                    <div className={`relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group`}>
                      
                      {/* Background decorative elements */}
                      <div className="absolute inset-0">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-bl-3xl`} />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-tr-3xl" />
                        
                        {/* Animated background pattern */}
                        <motion.div
                          animate={{ 
                            backgroundPosition: ["0% 0%", "100% 100%"]
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                          }}
                        />
                      </div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Company Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                          <div className="flex items-start gap-6">
                            <motion.div 
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg relative overflow-hidden`}
                            >
                              <span className="relative z-10">{exp.logo}</span>
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-white/20 rounded-2xl"
                              />
                            </motion.div>
                            
                            <div>
                              <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white leading-tight mb-2">
                                {exp.company}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                  <HiBriefcase className="w-4 h-4" />
                                  {exp.companyType}
                                </span>
                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                  📍 {exp.location}
                                </span>
                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                  👥 {exp.teamSize}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Impact metrics */}
                          <div className="flex gap-4">
                            {Object.entries(exp.metrics).map(([key, value], idx) => (
                              <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ delay: 0.2 * idx, duration: 0.5 }}
                                className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                              >
                                <div className={`text-lg font-black bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                  {value}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Positions */}
                        <div className="space-y-6 mb-8">
                          {exp.positions.map((position, posIndex) => (
                            <motion.div 
                              key={posIndex} 
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.3 * posIndex, duration: 0.6 }}
                              className="p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                            >
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                <div>
                                  <h4 className="text-xl font-black text-gray-800 dark:text-white flex items-center gap-3">
                                    <HiBriefcase className="w-5 h-5 text-blue-600" />
                                    {position.title}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                    {position.description}
                                  </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  <span className={`bg-gradient-to-r ${exp.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2`}>
                                    <HiCalendar className="w-4 h-4" />
                                    {position.period}
                                  </span>
                                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                                    {position.type}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Achievement highlight */}
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
                                <div className="flex items-start gap-3">
                                  <HiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <span className="font-semibold text-green-700 dark:text-green-300">Key Achievement:</span>
                                    <p className="text-green-600 dark:text-green-400 mt-1">{position.achievement}</p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Responsibilities */}
                              <div>
                                <h5 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                                  <HiCog className="w-4 h-4 text-purple-600" />
                                  Key Responsibilities
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {position.responsibilities.map((resp, respIndex) => (
                                    <motion.div
                                      key={respIndex}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                      transition={{ delay: 0.1 * respIndex, duration: 0.4 }}
                                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                      <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                                      <span>{resp}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced Key Achievements */}
                        <div className="mb-8">
                          <h5 className="text-xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                            <div className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center`}>
                              <HiLightningBolt className="w-4 h-4 text-white" />
                            </div>
                            Project Highlights & Achievements
                          </h5>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, hIndex) => (
                              <motion.div
                                key={hIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.1 * hIndex, duration: 0.5 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="group p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    {highlight}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Technologies */}
                        <div>
                          <h5 className="text-xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <HiCode className="w-4 h-4 text-white" />
                            </div>
                            Technologies & Tools
                          </h5>
                          
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, tIndex) => {
                              const icon = exp.techIcons[tech]
                              return (
                                <motion.div
                                  key={tIndex}
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                  transition={{ delay: 0.05 * tIndex, duration: 0.4 }}
                                  whileHover={{ scale: 1.1, y: -3 }}
                                  className="group relative flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                  {/* Animated background */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                                  
                                  {/* Content */}
                                  <div className="relative z-10 flex items-center gap-2">
                                    {icon && <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>}
                                    <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{tech}</span>
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Career Progression Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-700 dark:via-pink-700 dark:to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              
              {/* Background patterns */}
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
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl md:text-4xl font-black mb-4 flex items-center justify-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      🚀
                    </motion.span>
                    Career <span className="text-yellow-300">Impact</span>
                  </h3>
                  <p className="text-purple-100 dark:text-purple-200 text-lg md:text-xl">
                    Continuous growth, innovation, and delivering exceptional results
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[
                    { 
                      value: "1.5+", 
                      label: "Years of Experience", 
                      desc: "Professional Growth",
                      icon: "📈",
                      color: "text-yellow-300"
                    },
                    { 
                      value: "50+", 
                      label: "LLM Evaluations", 
                      desc: "AI Model Assessments",
                      icon: "🤖",
                      color: "text-blue-300"
                    },
                    { 
                      value: "5+", 
                      label: "Projects Completed", 
                      desc: "Quality Deliveries",
                      icon: "🎯",
                      color: "text-green-300"
                    }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: 180 }}
                      transition={{ delay: 0.3 * index, duration: 0.8 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className={`text-4xl mb-4 ${stat.color}`}
                      >
                        {stat.icon}
                      </motion.div>
                      
                      <motion.div 
                        className="text-4xl md:text-5xl font-black mb-2"
                        animate={{ 
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.5)",
                            "0 0 30px rgba(255,255,255,0.8)",
                            "0 0 20px rgba(255,255,255,0.5)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      
                      <div className="text-purple-100 dark:text-purple-200 font-bold text-lg mb-1">
                        {stat.label}
                      </div>
                      <div className="text-purple-200 dark:text-purple-300 text-sm opacity-80">
                        {stat.desc}
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
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

export default Experience 