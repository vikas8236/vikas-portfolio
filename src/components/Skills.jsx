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
  FaDatabase
} from 'react-icons/fa'
import { 
  SiDjango, 
  SiPostgresql, 
  SiRedis, 
  SiCplusplus,
  SiCelery
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <FaPython className="text-xl sm:text-2xl" />,
      skills: [
        { name: "Python", level: 90, icon: <FaPython /> },
        { name: "C++", level: 75, icon: <SiCplusplus /> },
        { name: "Java", level: 70, icon: <FaJava /> },
        { name: "JavaScript", level: 80, icon: <FaJs /> },
        { name: "SQL", level: 85, icon: <FaDatabase /> }
      ]
    },
    {
      category: "Web Technologies",
      icon: <FaHtml5 className="text-xl sm:text-2xl" />,
      skills: [
        { name: "HTML", level: 90, icon: <FaHtml5 /> },
        { name: "CSS", level: 85, icon: <FaCss3Alt /> },
        { name: "WebSocket", level: 75, icon: "🔌" },
        { name: "Google Auth", level: 80, icon: "🔐" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <SiDjango className="text-xl sm:text-2xl" />,
      skills: [
        { name: "Django", level: 90, icon: <SiDjango /> },
        { name: "Django REST Framework", level: 85, icon: <SiDjango /> },
        { name: "Wagtail CMS", level: 80, icon: "📄" },
        { name: "Celery", level: 75, icon: <SiCelery /> }
      ]
    },
    {
      category: "Databases",
      icon: <SiPostgresql className="text-xl sm:text-2xl" />,
      skills: [
        { name: "PostgreSQL", level: 85, icon: <SiPostgresql /> },
        { name: "SQLite", level: 80, icon: <FaDatabase /> },
        { name: "Redis", level: 75, icon: <SiRedis /> }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <FaDocker className="text-xl sm:text-2xl" />,
      skills: [
        { name: "Docker", level: 80, icon: <FaDocker /> },
        { name: "GitHub", level: 90, icon: <FaGithub /> },
        { name: "Poetry", level: 75, icon: "📦" },
        { name: "Sentry", level: 70, icon: "🔍" }
      ]
    },
    {
      category: "LLM & AI Tools",
      icon: "🤖",
      skills: [
        { name: "Gemini", level: 85, icon: "✨" },
        { name: "Claude", level: 85, icon: "🧠" },
        { name: "Prompt Engineering", level: 90, icon: "💭" },
        { name: "Evaluation Workflows", level: 85, icon: "📊" }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
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
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto px-4">
              Comprehensive expertise across modern development stack and AI technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="text-blue-600">
                    {typeof category.icon === 'string' ? (
                      <span className="text-xl sm:text-2xl">{category.icon}</span>
                    ) : (
                      category.icon
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 text-sm sm:text-base">
                            {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                          </span>
                          <span className="font-medium text-gray-700 text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Additional Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "Microservices Architecture",
                  "API Design & Development", 
                  "Database Optimization",
                  "Performance Tuning",
                  "Code Review",
                  "Agile Development",
                  "Test-Driven Development",
                  "CI/CD Pipelines",
                  "System Design",
                  "Technical Documentation"
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Growth Statement */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 sm:mt-12 text-center px-4"
          >
            <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "Continuously learning and adapting to new technologies. 
              Passionate about building scalable solutions and staying at the forefront of 
              software engineering and AI advancement."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 