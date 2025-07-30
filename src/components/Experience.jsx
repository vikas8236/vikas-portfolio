import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOfficeBuilding, HiBriefcase, HiCalendar } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const experiences = [
    {
      id: 1,
      company: "Golden Eagle IT Technologies Pvt. Ltd.",
      positions: [
        {
          title: "Software Engineer",
          period: "Jun - Dec 2024",
          type: "Full-time"
        },
        {
          title: "Software Engineer Trainee", 
          period: "Jun - Dec 2024",
          type: "Trainee"
        }
      ],
      highlights: [
        "Wagtail CMS migration and optimization",
        "Dynamic page rendering implementation", 
        "REST API development and integration",
        "Backend architecture improvements"
      ],
      technologies: ["Python", "Django", "Wagtail CMS", "REST API", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Turing",
      positions: [
        {
          title: "LLM Evaluator",
          period: "2024",
          type: "Contract"
        }
      ],
      highlights: [
        "Gemini and Claude model evaluations",
        "OpenEvals and DeepMind project contributions",
        "Prompt design and human judgment workflows",
        "Dockerized evaluation environments",
        "Web scraping and cursor-based testing"
      ],
      technologies: ["Gemini", "Claude", "Docker", "Prompt Engineering", "Python", "Evaluation Frameworks"]
    }
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Professional Experience
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto px-4">
              Building scalable solutions and evaluating cutting-edge AI models
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-4 h-full w-1 bg-blue-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-8 sm:mb-12 ${
                  index % 2 === 0 
                    ? 'md:mr-1/2 md:pr-8 lg:pr-12' 
                    : 'md:ml-1/2 md:pl-8 lg:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 sm:p-8 ml-12 md:ml-0 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <HiOfficeBuilding className="text-blue-600 text-xl sm:text-2xl flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                      {exp.company}
                    </h3>
                  </div>

                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <HiBriefcase className="text-gray-600 flex-shrink-0" />
                        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                          {position.title}
                        </h4>
                        <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <HiCalendar className="flex-shrink-0" />
                        <span className="text-sm sm:text-base">{position.period}</span>
                      </div>
                    </div>
                  ))}

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 