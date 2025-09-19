import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive full-stack Library Management System with custom REST API. Features include user authentication, book catalog management, borrowing system, and admin dashboard with analytics.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
      link: "https://libra-track.example.com",
      github: "https://github.com/example/libra-track",
      liveLink: "View Live Project",
      image: "📚",
      status: "Completed",
      features: [
        "User authentication & authorization",
        "Book search and filtering",
        "Borrow/return tracking",
        "Admin dashboard with analytics",
        "Responsive design"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js. Features smooth animations, dark/light mode toggle, and project showcase with filtering capabilities.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Icons"],
      link: "https://portfolio.example.com",
      github: "https://github.com/example/portfolio",
      liveLink: "Visit Portfolio",
      image: "🌐",
      status: "Completed",
      features: [
        "Responsive design",
        "Smooth animations",
        "Dark/light mode",
        "Project filtering",
        "Contact form"
      ]
    },
    {
      title: "Billing Software",
      description: "A comprehensive Billing Software solution for small businesses. Currently implementing features like product management, customer database, payment processing, and invoice generation with PDF export.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PDFKit", "Chart.js"],
      link: "#",
      github: "#",
      liveLink: "In Development",
      image: "🧾",
      status: "In Progress",
      features: [
        "Product & inventory management",
        "Customer database",
        "Invoice generation (PDF)",
        "Payment processing",
        "Sales analytics dashboard"
      ]
    },
    {
      title: "Weather Forecasting App",
      description: "A real-time weather forecasting application with location detection, 5-day forecasts, and interactive charts. Integrates with OpenWeatherMap API for accurate weather data.",
      tech: ["React.js", "Chart.js", "OpenWeather API", "Geolocation API"],
      link: "https://weather-app.example.com",
      github: "https://github.com/example/weather-app",
      liveLink: "Check Weather",
      image: "☀️",
      status: "Completed",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location detection",
        "Interactive charts",
        "Weather alerts"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, user reviews, and secure checkout process. Includes admin panel for inventory management.",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      github: "https://github.com/example/ecommerce",
      liveLink: "Coming Soon",
      image: "🛒",
      status: "In Development",
      features: [
        "Product catalog with filters",
        "Shopping cart",
        "User reviews & ratings",
        "Secure checkout",
        "Admin dashboard"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team assignments, progress tracking, and real-time updates using WebSockets.",
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "React Beautiful DnD"],
      link: "https://taskflow.example.com",
      github: "https://github.com/example/taskflow",
      liveLink: "Try TaskFlow",
      image: "✅",
      status: "Completed",
      features: [
        "Drag-and-drop interface",
        "Team collaboration",
        "Real-time updates",
        "Progress tracking",
        "File attachments"
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

  return (
    <section id="projects" className="section-container py-10 md:py-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className={`section-title text-4xl md:text-5xl font-bold text-center mb-4 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-green-600 opacity-20 blur-md"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Projects
            </span>
          </span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-825 border border-gray-700 rounded-xl overflow-hidden group transition-all duration-500 opacity-0 transform ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project status badge */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === "Completed" 
                  ? "bg-green-900 text-green-200" 
                  : "bg-yellow-900 text-yellow-200"
              }`}>
                {project.status}
              </div>
              
              {/* Project image/icon */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl z-10">{project.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className={`absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${hoveredProject === index ? 'opacity-10' : ''}`}></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features list */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-emerald-400">+{project.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-750 text-emerald-300 rounded-full text-xs transition-all duration-300 hover:bg-emerald-900 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <a 
                    href={project.link} 
                    target={project.link !== "#" ? "_blank" : undefined} 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-medium text-sm ${
                      project.link !== "#" 
                        ? "text-emerald-400 hover:text-emerald-300 transition-colors" 
                        : "text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {project.liveLink}
                    {project.link !== "#" && (
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    )}
                  </a>
                  
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more projects button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/dinakaranak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-700 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            View More Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects