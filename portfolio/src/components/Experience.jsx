import { useState, useEffect } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Adventure Technology Solutions",
      period: "Mar 2025 – Present",
      description: "I am working as a MERN Stack Developer at Adventure Technology Solutions with 7 months of hands-on experience in full-stack development. During this period, I have contributed to key projects including Examrally, an online examination platform, Billing Software, a desktop application developed with Electron.js, the Examrally Mobile App using React Native and TypeScript, and multiple E-commerce Websites featuring admin panels and backend integration. These projects have enhanced my expertise in building scalable web and mobile applications, creating efficient admin dashboards, and delivering user-friendly software solutions.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "ReactNative", "TypeScript", "Electron.js", "AWS", "Git", "Github", "vercel"]
    },
    {
      title: "Full Stack Web Development Internship",
      company: "Glacier Technologies",
      period: "Dec 2024 – Mar 2025",
      description: "Completed hands-on training in MERN stack development including MongoDB, Express.js, React.js, and Node.js, with a focus on building scalable web applications. Worked on real-time projects such as Library Management System and Weather Forecasting Website, gaining practical experience in frontend/backend integration, API handling, and deployment.",
      skills: ["MERN Stack", "REST APIs", "Deployment", "Project Development"]
    }
  ]

  useEffect(() => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="section-container py-8 md:py-12 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4 md:px-6 max-w-8xl">
        {/* Enhanced Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
            <span className="relative inline-block">
              <span className="absolute -inset-1 sm:-inset-2 bg-blue-600 opacity-10 blur-md"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-400">
                Work Experience
              </span>
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in web development
          </p>
        </div>

        {/* Unique Card Stack Design */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-600 opacity-10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-600 opacity-10 rounded-full blur-xl"></div>
          
          {/* Main Content Container */}
          <div className="relative">
            {/* Tab Navigation - Horizontal Cards */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex-1 max-w-md mx-auto md:mx-0 cursor-pointer transition-all duration-500 transform ${
                    activeTab === index 
                      ? 'scale-105 z-10' 
                      : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-500 ${
                    activeTab === index
                      ? 'border-blue-500 bg-gray-825 shadow-2xl shadow-blue-500/20'
                      : 'border-gray-700 bg-black hover:border-blue-400'
                  }`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                      activeTab === index 
                        ? 'opacity-10 from-blue-500 to-blue-500' 
                        : 'opacity-0'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-white text-lg">{exp.company}</h3>
                          <p className="text-blue-400 text-sm">{exp.title}</p>
                        </div>
                        <span className="text-xs bg-gray-750 text-blue-300 px-2 py-1 rounded-full whitespace-nowrap">
                          {exp.period.split(' – ')[0]}
                        </span>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 transition-all duration-1000 ${
                            activeTab === index ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Display - Floating Card */}
            <div className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gray-825 border border-gray-700 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-400 mb-2">
                        {experiences[activeTab].title}
                      </h3>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                        <h4 className="text-lg md:text-xl font-semibold text-white">
                          {experiences[activeTab].company}
                        </h4>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-blue-800 to-blue-800 text-blue-100 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
                      {experiences[activeTab].period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {experiences[activeTab].description}
                    </p>
                  </div>

                  {/* Skills Cloud */}
                  <div>
                    <div className="flex items-center mb-4">
                      <h5 className="text-lg font-medium text-white mr-4">Technologies Used</h5>
                      <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-2 bg-gray-750 text-blue-300 rounded-xl text-sm transition-all duration-300 hover:bg-blue-900 hover:text-white hover:scale-105 cursor-default border border-gray-600 hover:border-blue-500 shadow-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-3 bg-gray-800 rounded-full px-6 py-3 shadow-lg">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-500/50' 
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
    </section>
  )
}

export default Experience