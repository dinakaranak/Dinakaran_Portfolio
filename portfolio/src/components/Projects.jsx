import { useState, useEffect } from 'react'
import { FaReceipt, FaShoppingCart, FaPizzaSlice, FaStar, FaCloudSun, FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle, FaTshirt } from 'react-icons/fa'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [showAllFeatures, setShowAllFeatures] = useState({})
  
  const projects = [
    {
      title: "BillZen Invoices",
      description: "A comprehensive billing software with desktop app using Electron.js. Features cashier login for billing operations with dual printer support (thermal & A4), credit management, and admin panel for complete business management.",
      tech: ["React.js", "Electron.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      link: "https://billing-invoices.vercel.app/",
      github: "https://github.com/dinakaranak",
      liveLink: "View Desktop App",
      icon: <FaReceipt className="text-4xl" />,
      status: "Completed",
      features: [
        "Cashier & Admin login systems",
        "Dual printer support (Thermal & A4)",
        "Credit management system",
        "Product & stock management",
        "Customer & seller details tracking",
        "Expense tracking & reports",
        "Marketing campaign management"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with Google authentication, advanced product categorization, secure Razorpay payments, and comprehensive admin panel for product and offer management.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      link: "https://sky-cart-eta.vercel.app/",
      github: "https://github.com/dinakaranak",
      liveLink: "Shop Now",
      icon: <FaShoppingCart className="text-4xl" />,
      status: "Completed",
      features: [
        "Google OAuth authentication",
        "Advanced product categorization",
        "Razorpay payment integration",
        "Admin panel with offer management",
        "Order tracking system",
        "Wishlist & favorites",
        "Product reviews & ratings"
      ]
    },
    {
      title: "Foodie Restaurant App",
      description: "Cross-platform restaurant application with React Native mobile app and React.js admin panel. Features attractive UI/UX, real-time order management, special offers, and comprehensive admin dashboard.",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "React.js", "Node.js", "Express.js"],
      // link: "https://foodie-restaurant.example.com",
      github: "https://github.com/dinakaranak",
      liveLink: "Order Food",
      icon: <FaPizzaSlice className="text-4xl" />,
      status: "Completed",
      features: [
        "Cross-platform mobile app",
        "Attractive food presentation",
        "Real-time order management",
        "Special offers & promotions",
        "Admin dashboard analytics",
        "Table reservation system",
        "Delivery tracking integration"
      ]
    },
    {
      title: "Modern Portfolio",
      description: "A stunning, responsive portfolio website with smooth animations, dark/light mode toggle, project showcase, and resume download functionality. Deployed on Vercel for optimal performance.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Icons", "Vercel"],
      link: "https://www.dinakaran.shop/",
      github: "https://github.com/dinakaranak",
      liveLink: "Visit Portfolio",
      icon: <FaStar className="text-4xl" />,
      status: "Completed",
      features: [
        "Smooth animations & transitions",
        "Dark/light mode toggle",
        "Responsive design",
        "Resume download functionality",
        "Project filtering system",
        "Contact form with validation",
        "SEO optimized pages"
      ]
    },
    {
      title: "FashionHub Store",
      description: "A visually stunning static fashion e-commerce website with attractive product displays, user-friendly interface, add to cart functionality, and responsive design for all devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      link: "https://shopping-webpage-git-master-dinakaranaks-projects.vercel.app/",
      github: "https://github.com/dinakaranak",
      liveLink: "Explore Fashion",
      icon: <FaTshirt  className="text-4xl" />,
      status: "Completed",
      features: [
        "Visually appealing product displays",
        "Add to cart functionality",
        "Responsive mobile-first design",
        "User-friendly navigation",
        "Static website optimization",
        "Size guide & fit recommendations",
        "Product comparison feature"
      ]
    },
    {
      title: "WeatherSphere Pro",
      description: "A sophisticated weather forecasting application with real-time data, interactive charts, location-based forecasts, and beautiful UI. Integrates multiple weather APIs for accurate predictions.",
      tech: ["React.js", "Chart.js", "Weather API", "Geolocation API", "Tailwind CSS"],
      link: "https://weather-app-ten-roan-38.vercel.app/",
      github: "https://github.com/dinakaranak",
      liveLink: "Check Weather",
      icon: <FaCloudSun className="text-4xl" />,
      status: "Completed",
      features: [
        "Real-time weather updates",
        "Interactive weather charts",
        "Location-based forecasts",
        "Beautiful UI/UX design",
        "Multiple location support",
        "Weather alerts & notifications",
        "Historical weather data"
      ]
    }
  ]

  useEffect(() => {
    // Animation on scroll
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFeatures = (index) => {
    setShowAllFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id="projects" className="section-container py-16 md:py-20 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className={`section-title text-2xl md:text-4xl font-bold text-center mb-6 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-blue-600 opacity-10 blur-md"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              My Projects
            </span>
          </span>
        </h2>
        
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore my portfolio of innovative web applications and software solutions. 
          Each project showcases my expertise in modern technologies and user-centered design principles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-825 border border-gray-700 rounded-2xl overflow-hidden group transition-all duration-500 opacity-0 transform hover:scale-105 hover:shadow-2xl hover:border-blue-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project status badge */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1 ${
                project.status === "Completed" 
                  ? "bg-blue-900/80 text-blue-200 border border-blue-700/50" 
                  : "bg-blue-900/80 text-blue-200 border border-blue-700/50"
              }`}>
                <FaCheckCircle className="text-xs" />
                {project.status}
              </div>
              
              {/* Project icon with gradient overlay */}
              <div className="h-48 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="z-10 transform group-hover:scale-110 transition-transform duration-500 text-9xl">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredProject === index ? 'opacity-100' : ''}`}></div>
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              {/* Project content */}
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features list */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-2 mb-3">
                    {project.features.slice(0, showAllFeatures[index] ? project.features.length : 3).map((feature, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="text-blue-400 mr-2 mt-1">▸</span>
                        <span className="group-hover/item:text-emerald-300 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Show more/less button */}
                  {project.features.length > 3 && (
                    <button 
                      onClick={() => toggleFeatures(index)}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs font-medium group"
                    >
                      {showAllFeatures[index] ? (
                        <>
                          <svg className="w-4 h-4 mr-1 transform rotate-180 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Show Less Features
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-1 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          +{project.features.length - 3} More Features
                        </>
                      )}
                    </button>
                  )}
                </div>
                
                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1.5 bg-gray-750 text-blue-300 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-900 hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project links */}
                <div className="flex justify-between items-center pt-5 border-t border-gray-700">
                  <a 
                    href={project.link} 
                    target={project.link ? "_blank" : undefined} 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                      project.link 
                        ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg transform hover:-translate-y-0.5" 
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {project.liveLink}
                    {project.link && (
                      <FaExternalLinkAlt className="w-3 h-3 ml-2" />
                    )}
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label="GitHub repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more projects button */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/dinakaranak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-emerald-500/20"
          >
            <FaCode className="w-5 h-5 mr-3" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects