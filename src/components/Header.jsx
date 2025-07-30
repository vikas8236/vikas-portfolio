import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        console.warn(`Section with id "${sectionId}" not found`)
      }
    } catch (error) {
      console.error('Error scrolling to section:', error)
    }
    setIsOpen(false)
  }, [])

  const handleKeyDown = useCallback((event, sectionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToSection(sectionId)
    }
  }, [scrollToSection])

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            onKeyDown={(e) => handleKeyDown(e, 'hero')}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Go to home section"
          >
            VD
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8" role="menubar">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 lg:px-3 py-2"
                role="menuitem"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleMobileMenu()
                }
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <HiX size={20} className="sm:w-6 sm:h-6" /> : <HiMenu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
          role={isOpen ? "menu" : undefined}
          aria-hidden={!isOpen}
        >
          <div className="py-3 sm:py-4 space-y-2 sm:space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className="block w-full text-left text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-50"
                role="menuitem"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header 