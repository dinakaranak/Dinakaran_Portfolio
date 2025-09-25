import { useState, useEffect } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Adventure Technology Solutions Pvt. Ltd",
      period: "July 2025 – Present",
      description: "Currently working on a Billing Software project, implementing features like product management, customer handling, payment processing, and invoice generation. Developing scalable and user-friendly solutions using MongoDB, Express.js, React.js, and Node.js.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "Git", "Github", "vercel", "Electron.js", "ReactNative"]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Adventure Technology Solutions Pvt. Ltd",
      period: "Mar 2025 – Jun 2025",
      description: "Worked on live projects like an Admin Dashboard and Product Management System with complete CRUD operations, search filters, and image upload. Collaborated using GitHub, followed Agile methodologies, and deployed websites on AWS Cloud, Render, Vercel, and MongoDB Atlas for production use.",
      skills: ["React.js", "Node.js", "MongoDB", "GitHub", "HTML", "CSS", "AWS", "Vercel", "JavaScript", "Express.js"]
    },
    {
      title: "Full Stack Web Development Training",
      company: "Glacier Technologies",
      period: "Dec 2024 – Mar 2025",
      description: "Completed hands-on training in MERN stack development including MongoDB, Express.js, React.js, and Node.js, with a focus on building scalable web applications. Worked on real-time projects such as Library Management System and Weather Forecasting Website, gaining practical experience in frontend/backend integration, API handling, and deployment.",
      skills: ["MERN Stack", "REST APIs", "Deployment", "Project Development"]
    }
  ]

  useEffect(() => {
    // Animation on scroll
    const handleScroll = () => {
      const element = document.getElementById('experience');
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
    <section id="experience" className="section-container py-10 md:py-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-8xl">
        <h2 className={`section-title text-4xl md:text-5xl font-bold text-center mb-16 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-blue-600 opacity-20 blur-md"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Work Experience
            </span>
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company tabs - vertical on desktop, horizontal on mobile */}
          <div className="lg:w-1/3">
            <div className="flex lg:flex-col overflow-x-auto pb-2 lg:overflow-x-visible scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-800 rounded-lg">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-6 py-4 text-left rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-blue-700 to-cyan-700 text-white shadow-lg scale-[1.02]' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-750'
                  } ${index > 0 ? 'ml-2 lg:ml-0 lg:mt-2' : ''}`}
                >
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-sm opacity-80 mt-1">{exp.period.split(' – ')[0]}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience content */}
          <div className="lg:w-2/3">
            <div className="card bg-gray-825 border border-gray-700 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {experiences[activeTab].title}
                </h3>
                <span className="bg-gradient-to-r from-blue-800 to-cyan-800 text-blue-100 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  {experiences[activeTab].period}
                </span>
              </div>
              
              <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></span>
                {experiences[activeTab].company}
              </h4>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {experiences[activeTab].description}
              </p>
              
              <div className="mt-6">
                <h5 className="text-lg font-medium text-white mb-3">Technologies & Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gray-750 text-cyan-300 rounded-full text-sm transition-all hover:bg-cyan-900 hover:text-white hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated timeline indicator */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTab === index 
                          ? 'bg-cyan-400 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to experience ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thumb-blue-700::-webkit-scrollbar-thumb {
          background-color: #1d4ed8;
          border-radius: 3px;
        }
        .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: #1f2937;
          border-radius: 3px;
        }
      `}</style>
    </section>
  )
}

export default Experience