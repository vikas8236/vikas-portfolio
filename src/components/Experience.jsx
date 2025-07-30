import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOfficeBuilding, HiBriefcase, HiCalendar, HiStar, HiLightningBolt } from 'react-icons/hi'
import { SiDjango, SiPython, SiPostgresql, SiDocker } from 'react-icons/si'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const experiences = [
    {
      id: 1,
      company: "Golden Eagle IT Technologies Pvt. Ltd.",
      logo: "🏢",
      color: "from-blue-500 to-cyan-500",
      positions: [
        {
          title: "Software Engineer",
          period: "Jun - Dec 2024",
          type: "Full-time",
          achievement: "Backend Development & LLM Training"
        },
        {
          title: "Software Engineer Trainee", 
          period: "Jun - Dec 2024",
          type: "Trainee",
          achievement: "Accelerated Learning Path"
        }
      ],
      highlights: [
        "Wagtail CMS migration and optimization",
        "Dynamic page rendering implementation", 
        "REST API development and integration",
        "LLM Evaluation and Training for Turing projects",
        "Gemini and Claude model evaluations",
        "Prompt design and evaluation workflows"
      ],
      technologies: ["Python", "Django", "Wagtail CMS", "REST API", "PostgreSQL", "LLM Evaluation", "Prompt Engineering"],
      techIcons: {
        "Python": <SiPython className="text-yellow-500" />,
        "Django": <SiDjango className="text-green-600" />,
        "PostgreSQL": <SiPostgresql className="text-blue-600" />
      },
      impact: "Successfully delivered CMS migration and LLM evaluation projects"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, rgb(59 130 246) 1px, transparent 1px), linear-gradient(180deg, rgb(59 130 246) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Experience</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-gray-800">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building scalable solutions and evaluating cutting-edge AI models across diverse projects
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <motion.div 
              variants={timelineVariants}
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full origin-top"
            />
            {/* Mobile timeline line */}
            <motion.div 
              variants={timelineVariants}
              className="md:hidden absolute left-8 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full origin-top"
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 
                    ? 'md:mr-1/2 md:pr-12 lg:pr-16' 
                    : 'md:ml-1/2 md:pl-12 lg:pl-16'
                }`}
              >
                {/* Enhanced Timeline dot */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-xl z-20 flex items-center justify-center text-white font-bold`}
                >
                  <span className="text-sm">{exp.logo}</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 ml-16 md:ml-0 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-bl-full`} />
                  
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 leading-tight">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <HiStar className="text-yellow-500 text-sm" />
                          <span className="text-sm text-gray-600 font-medium">{exp.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Positions */}
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="mb-6 p-4 bg-gray-50/50 rounded-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <HiBriefcase className="text-gray-600 text-lg flex-shrink-0" />
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">
                            {position.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm`}>
                            {position.type}
                          </span>
                          <div className="flex items-center gap-2 text-gray-600">
                            <HiCalendar className="text-sm" />
                            <span className="text-sm font-medium">{position.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg w-fit">
                        <HiLightningBolt className="text-sm" />
                        <span className="text-sm font-semibold">{position.achievement}</span>
                      </div>
                    </div>
                  ))}

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="font-black text-gray-800 mb-4 text-lg flex items-center gap-2">
                      <HiStar className="text-yellow-500" />
                      Key Achievements
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-sm text-gray-700 leading-relaxed font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Technologies */}
                  <div>
                    <h5 className="font-black text-gray-800 mb-4 text-lg flex items-center gap-2">
                      <HiLightningBolt className="text-blue-500" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => {
                        const icon = exp.techIcons[tech]
                        return (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="group flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                          >
                            {icon && <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>}
                            <span className="group-hover:text-gray-900 transition-colors">{tech}</span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Career Progression Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Career Highlights
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🏢
                  </div>
                  <div className="text-2xl font-black text-gray-800 mb-2">1.5+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🤖
                  </div>
                  <div className="text-2xl font-black text-gray-800 mb-2">50+</div>
                  <div className="text-sm text-gray-600 font-medium">LLM Evaluations</div>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🚀
                  </div>
                  <div className="text-2xl font-black text-gray-800 mb-2">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
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