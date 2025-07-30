import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDocker, 
  FaGithub,
  FaDatabase,
  FaReact,
  FaNodeJs
} from 'react-icons/fa'
import { 
  SiDjango, 
  SiPostgresql, 
  SiRedis, 
  SiCplusplus,
  SiCelery,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import { HiCode, HiDatabase, HiCog, HiSparkles } from 'react-icons/hi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <HiCode className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      description: "Core programming languages I excel in",
      skills: [
        { name: "Python", level: 90, icon: <FaPython />, color: "from-yellow-400 to-yellow-600", experience: "1.5+ years" },
        { name: "JavaScript", level: 75, icon: <FaJs />, color: "from-yellow-500 to-orange-500", experience: "1+ years" },
        { name: "C++", level: 70, icon: <SiCplusplus />, color: "from-blue-600 to-purple-600", experience: "1+ years" },
        { name: "Java", level: 65, icon: <FaJava />, color: "from-red-500 to-orange-600", experience: "1+ years" },
        { name: "SQL", level: 80, icon: <FaDatabase />, color: "from-gray-600 to-gray-800", experience: "1+ years" }
      ]
    },
    {
      category: "Web Technologies",
      icon: <FaHtml5 className="text-2xl" />,
      color: "from-green-500 to-teal-500",
      description: "Frontend and web development technologies",
      skills: [
        { name: "HTML5", level: 85, icon: <FaHtml5 />, color: "from-orange-500 to-red-500", experience: "1.5+ years" },
        { name: "CSS3", level: 80, icon: <FaCss3Alt />, color: "from-blue-400 to-blue-600", experience: "1.5+ years" },
        { name: "React", level: 75, icon: <FaReact />, color: "from-cyan-400 to-blue-500", experience: "1+ years" },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-500", experience: "1+ years" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <SiDjango className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      description: "Backend frameworks and development tools",
      skills: [
        { name: "Django", level: 85, icon: <SiDjango />, color: "from-green-600 to-green-800", experience: "1+ years" },
        { name: "Django REST Framework", level: 80, icon: <SiDjango />, color: "from-green-500 to-teal-600", experience: "1+ years" },
        { name: "Wagtail CMS", level: 75, icon: "📄", color: "from-purple-500 to-indigo-600", experience: "6+ months" },
        { name: "Celery", level: 70, icon: <SiCelery />, color: "from-green-400 to-lime-500", experience: "6+ months" }
      ]
    },
    {
      category: "Databases",
      icon: <HiDatabase className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      description: "Database technologies and data management",
      skills: [
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql />, color: "from-blue-600 to-indigo-600", experience: "1+ years" },
        { name: "SQLite", level: 75, icon: <FaDatabase />, color: "from-gray-500 to-gray-700", experience: "1+ years" },
        { name: "Redis", level: 70, icon: <SiRedis />, color: "from-red-500 to-red-700", experience: "6+ months" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <HiCog className="text-2xl" />,
      color: "from-indigo-500 to-purple-500",
      description: "Development tools and deployment technologies",
      skills: [
        { name: "Docker", level: 75, icon: <FaDocker />, color: "from-blue-500 to-cyan-500", experience: "1+ years" },
        { name: "GitHub", level: 85, icon: <FaGithub />, color: "from-gray-700 to-black", experience: "1.5+ years" },
        { name: "Poetry", level: 70, icon: "📦", color: "from-purple-500 to-pink-500", experience: "6+ months" },
        { name: "Sentry", level: 65, icon: "🔍", color: "from-purple-600 to-indigo-600", experience: "6+ months" }
      ]
    },
    {
      category: "AI & LLM Tools",
      icon: <HiSparkles className="text-2xl" />,
      color: "from-pink-500 to-rose-500",
      description: "Artificial Intelligence and Language Model technologies",
      skills: [
        { name: "Prompt Engineering", level: 85, icon: "💭", color: "from-purple-500 to-pink-500", experience: "6+ months" },
        { name: "Gemini", level: 80, icon: "✨", color: "from-blue-500 to-purple-500", experience: "6+ months" },
        { name: "Claude", level: 80, icon: "🧠", color: "from-orange-500 to-red-500", experience: "6+ months" },
        { name: "Evaluation Workflows", level: 75, icon: "📊", color: "from-green-500 to-teal-500", experience: "6+ months" }
      ]
    }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const skillCardVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
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
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Technical Skills</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tech
              </span>
              <br />
              <span className="text-white">Arsenal</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across modern development stack and cutting-edge AI technologies
            </p>
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
                  className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-500 border border-white/20 h-full"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                        {category.category}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                            </div>
                            <div>
                              <span className="font-bold text-white text-sm md:text-base">
                                {skill.name}
                              </span>
                              <div className="text-xs text-gray-400">{skill.experience}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-bold text-white">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-600/30">
                            <motion.div
                              variants={progressVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              custom={skill.level}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] animate-pulse" />
                            </motion.div>
                          </div>
                          {/* Skill level indicator */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 1.5 + skillIndex * 0.1, duration: 0.3 }}
                            className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full w-4 h-4 border-2 border-gray-800 shadow-lg"
                            style={{ left: `${Math.max(skill.level - 2, 0)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Additional Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Additional Expertise
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { name: "Microservices", icon: "🔧", color: "from-blue-500 to-cyan-500" },
                  { name: "API Design", icon: "🔗", color: "from-green-500 to-teal-500" },
                  { name: "Performance Tuning", icon: "⚡", color: "from-yellow-500 to-orange-500" },
                  { name: "Code Review", icon: "👁️", color: "from-purple-500 to-pink-500" },
                  { name: "Agile Development", icon: "🔄", color: "from-indigo-500 to-purple-500" },
                  { name: "Test-Driven Development", icon: "🧪", color: "from-red-500 to-pink-500" },
                  { name: "CI/CD Pipelines", icon: "🚀", color: "from-cyan-500 to-blue-500" },
                  { name: "System Design", icon: "🏗️", color: "from-teal-500 to-green-500" },
                  { name: "Technical Documentation", icon: "📝", color: "from-gray-500 to-gray-700" },
                  { name: "Database Optimization", icon: "🗄️", color: "from-orange-500 to-red-500" }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`group bg-gradient-to-r ${skill.color} p-4 rounded-2xl text-center cursor-default hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-white text-xs font-bold leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Skills Growth Statement */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl md:text-2xl italic text-gray-300 leading-relaxed mb-8">
                "Continuously evolving with technology, passionate about building scalable solutions, 
                and staying at the forefront of software engineering and AI advancement."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  ))}
                </div>
                <span className="text-gray-400 font-semibold">Always Learning</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
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