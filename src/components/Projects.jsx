import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode, HiCog } from 'react-icons/hi'
import { FaGithub, FaDocker } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const projects = [
    {
      id: 1,
      title: "CokeEvals",
      description: "Advanced LLM evaluation platform with comprehensive prompt engineering and automated testing capabilities. Features end-to-end test cases, Docker containerization, and shell automation for streamlined AI model assessment.",
      image: "/api/placeholder/600/400",
      technologies: ["Prompt Engineering", "Docker", "Shell Scripting", "E2E Testing", "Python", "Automation"],
      highlights: [
        "Prompt engineering framework for LLM testing",
        "End-to-end test case automation",
        "Docker containerized evaluation environment", 
        "Shell script automation for deployment",
        "Comprehensive model assessment workflows"
      ],
      category: "AI/ML Evaluation",
      status: "Completed",
      githubUrl: "https://github.com/vikas8236", // CokeEvals repository URL
      liveUrl: null // Add live demo URL if available
    },
    {
      id: 2,
      title: "Tribute",
      description: "Dynamic CMS migration project leveraging Wagtail for content management. Built robust backend APIs and implemented seamless content migration workflows for enhanced digital experience.",
      image: "/api/placeholder/600/400", 
      technologies: ["Wagtail CMS", "Django", "Python", "REST API", "PostgreSQL", "Backend Development"],
      highlights: [
        "Complete CMS migration to Wagtail platform",
        "Dynamic page rendering implementation",
        "RESTful API development and integration",
        "Database optimization and migration",
        "Backend architecture improvements"
      ],
      category: "Web Development",
      status: "Completed",
      githubUrl: "https://github.com/vikas8236", // Tribute repository URL
      liveUrl: null // Add live demo URL if available
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const handleViewDetails = (project) => {
    // For now, scroll to contact section to discuss the project
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewCode = (githubUrl) => {
    if (githubUrl && githubUrl !== "https://github.com/vikas8236") {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    } else {
      // If no specific URL, open GitHub profile
      window.open('https://github.com/vikas8236', '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto px-4">
              Showcasing innovative solutions in AI evaluation and web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold opacity-30">
                        {project.title === "CokeEvals" ? <HiCog /> : <HiCode />}
                      </div>
                    </div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-white/90 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                            <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleViewDetails(project)}
                        aria-label={`View details for ${project.title} project`}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
                      >
                        <HiExternalLink className="text-sm sm:text-base" />
                        View Details
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleViewCode(project.githubUrl)}
                        aria-label={`View source code for ${project.title} project`}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
                      >
                        <FaGithub className="text-sm sm:text-base" />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-sm sm:text-base text-gray-600 mb-6 px-4">
              Interested in seeing more of my work?
            </p>
            <motion.a
              href="https://github.com/vikas8236"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View all projects on GitHub"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              <FaGithub className="text-lg sm:text-xl" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 