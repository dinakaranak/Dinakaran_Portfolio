import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaBars, FaTimes, FaInstagramSquare } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import GooeyNav from './Animation/GooeyNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`fixed w-full z-50  transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-8xl mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold text-white animate-pulse"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            DS
          </motion.div>
          
          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:block">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={activeNavItem}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3">
              <motion.a 
                href="https://www.linkedin.com/in/dinakaran-s-4089a5228/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors text-white"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={isScrolled ? 18 : 20} />
              </motion.a>
              <motion.a 
                href="https://github.com/dinakaranak" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors text-white"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={isScrolled ? 18 : 20} />
              </motion.a>
              <motion.a 
                href="mailto:dinakaran@example.com" 
                className="hover:text-blue-400 transition-colors text-white"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={isScrolled ? 18 : 20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/_.dina._x_/?__pwa=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors text-white"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagramSquare  size={isScrolled ? 18 : 20} />
              </motion.a>
            </div>
            
            {/* Mobile menu button */}
            <motion.button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 py-4">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 text-white hover:bg-blue-600 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
                <motion.a 
                  href="https://linkedin.com/in/dinakaran" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors text-white"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a 
                  href="https://github.com/dinakaranak" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors text-white"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:dinakaran@example.com" 
                  className="hover:text-blue-400 transition-colors text-white"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;