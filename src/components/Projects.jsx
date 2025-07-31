import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode, HiCog, HiStar, HiEye, HiClock } from 'react-icons/hi'
import { FaGithub, FaDocker, FaPython } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiTailwindcss, SiReact } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const projects = [
    {
      id: 1,
      title: "CokeEvals",
      subtitle: "AI Model Evaluation Platform",
      description: "Advanced LLM evaluation platform with comprehensive prompt engineering and automated testing capabilities. Features end-to-end test cases, Docker containerization, and shell automation for streamlined AI model assessment.",
      image: "/api/placeholder/600/400",
      technologies: ["Prompt Engineering", "Docker", "Shell Scripting", "E2E Testing", "Python", "Automation"],
      techIcons: {
        "Docker": <FaDocker className="text-blue-500" />,
        "Python": <FaPython className="text-yellow-500" />,
        "Shell Scripting": "🔧",
        "E2E Testing": "🧪"
      },
      highlights: [
        "Prompt engineering framework for LLM testing",
        "End-to-end test case automation",
        "Docker containerized evaluation environment", 
        "Shell script automation for deployment",
        "Comprehensive model assessment workflows"
      ],
      category: "AI/ML Evaluation",
      status: "Completed",
      duration: "3 months",
      impact: "40% faster evaluation process",
      gradient: "from-blue-500 to-purple-600",
      githubUrl: "https://github.com/vikas8236",
      liveUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Tribute",
      subtitle: "Dynamic CMS Platform",
      description: "Dynamic CMS migration project leveraging Wagtail for content management. Built robust backend APIs and implemented seamless content migration workflows for enhanced digital experience.",
      image: "/api/placeholder/600/400", 
      technologies: ["Wagtail CMS", "Django", "Python", "REST API", "PostgreSQL", "Backend Development"],
      techIcons: {
        "Django": <SiDjango className="text-green-600" />,
        "Python": <FaPython className="text-yellow-500" />,
        "PostgreSQL": <SiPostgresql className="text-blue-600" />,
        "REST API": "🔗"
      },
      highlights: [
        "Complete CMS migration to Wagtail platform",
        "Dynamic page rendering implementation",
        "RESTful API development and integration",
        "Database optimization and migration",
        "Backend architecture improvements"
      ],
      category: "Web Development",
      status: "Completed",
      duration: "4 months",
      impact: "60% improved content management",
      gradient: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/vikas8236",
      liveUrl: null,
      featured: true
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const handleViewDetails = (project) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewCode = (githubUrl) => {
    if (githubUrl && githubUrl !== "https://github.com/vikas8236") {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    } else {
      window.open('https://github.com/vikas8236', '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-300" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-20 blur-3xl" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
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
            <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions in AI evaluation and web development
            </p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer h-full"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative"
                >
                  {/* Project Image with Overlay */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Project Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-white text-8xl opacity-30"
                      >
                        {project.title === "CokeEvals" ? <HiCog /> : <HiCode />}
                      </motion.div>
                    </div>
                    
                    {/* Status Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <HiStar className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {project.status}
                      </span>
                    </div>

                    {/* Quick Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <HiClock className="text-blue-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <HiStar className="text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Project Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">{project.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-black text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <HiStar className="text-yellow-500" />
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {project.highlights.slice(0, 3).map((highlight, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 p-3 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-600/50 transition-colors duration-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Technologies */}
                    <div className="mb-8">
                      <h4 className="font-black text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <HiCode className="text-blue-500" />
                        Tech Stack
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {project.technologies.slice(0, 6).map((tech, index) => {
                          const icon = project.techIcons[tech]
                          return (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="group flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300"
                            >
                              {icon && <span className="text-sm group-hover:scale-110 transition-transform">{icon}</span>}
                              <span className="truncate group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{tech}</span>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleViewDetails(project)}
                        aria-label={`View details for ${project.title} project`}
                        className={`group relative overflow-hidden w-full flex items-center justify-center gap-3 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
                      >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                        <HiEye className="relative z-10" />
                        <span className="relative z-10">View Details</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Stats Summary */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Project Impact
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    🤖
                  </div>
                  <div className="text-3xl font-black text-gray-800 dark:text-white mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Featured Projects</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">AI & Web Development</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    ⚡
                  </div>
                  <div className="text-3xl font-black text-gray-800 dark:text-white mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Successful Deliveries</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Quality Projects</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    🏆
                  </div>
                  <div className="text-3xl font-black text-gray-800 dark:text-white mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Project Completion</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  Interested in my work?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Explore more projects and see how I can bring value to your next venture
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://github.com/vikas8236"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View all projects on GitHub"
                    className="group relative overflow-hidden bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    <div className="absolute inset-0 bg-gray-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <FaGithub className="text-xl relative z-10" />
                    <span className="relative z-10">View All Projects</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    Let's Collaborate
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 