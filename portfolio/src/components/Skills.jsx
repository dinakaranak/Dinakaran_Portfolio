import { useState, useEffect, useRef } from 'react'
import { 
  FaCode, 
  FaCogs, 
  FaTools, 
  FaStar,
  FaReact,
  FaBolt,
  FaMobile,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaPlug,
  FaFire,
  FaGitAlt,
  FaCloud,
  FaCode as FaVscode,
  FaEnvelope,
  FaPalette,
  FaPuzzlePiece,
  FaUsers,
  FaComments,
  FaSyncAlt,
  FaClock,
  FaDownload
} from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { 
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiCanva
} from 'react-icons/si'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const skillsRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-xl" />,
      color: "from-blue-700 to-blue-400",
      bgColor: "bg-gradient-to-br from-black to-black",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "React.Js", level: 90, icon: <FaReact /> },
        { name: "Electron.Js", level: 90, icon: <FaBolt /> },
        { name: "ReactNative.Js", level: 75, icon: <FaMobile /> },
        { name: "JavaScript", level: 85, icon: <FaJs /> },
        { name: "TypeScript", level: 60, icon: <SiTypescript /> },
        { name: "HTML", level: 95, icon: <FaHtml5 /> },
        { name: "CSS", level: 88, icon: <FaCss3Alt /> },
        { name: "React-BootStrap", level: 80, icon: <FaBootstrap /> },
        { name: "Tailwind CSS", level: 85, icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaCogs className="text-xl" />,
      color: "from-blue-700 to-blue-400",
      bgColor: "bg-gradient-to-br from-black to-black",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Node.Js", level: 82, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 78, icon: <SiMongodb /> },
        { name: "Express.Js", level: 80, icon: <SiExpress /> },
        { name: "REST APIs", level: 85, icon: <FaPlug /> },
        { name: "Firebase", level: 75, icon: <FaFire /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools className="text-xl" />,
      color: "from-blue-700 to-blue-400",
      bgColor: "bg-gradient-to-br from-black to-black",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
        { name: "AWS Cloud Services", level: 70, icon: <FaCloud /> },
        { name: "Vercel", level: 85, icon: <IoLogoVercel /> },
        { name: "VS Code", level: 95, icon: <FaVscode /> },
        { name: "Postman", level: 80, icon: <SiPostman /> },
        { name: "Canva", level: 80, icon: <SiCanva /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <FaStar className="text-xl" />,
      color: "from-blue-700 to-blue-400",
      bgColor: "bg-gradient-to-br from-black to-black",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Problem Solving", level: 90, icon: <FaPuzzlePiece /> },
        { name: "Team Collaboration", level: 85, icon: <FaUsers /> },
        { name: "Communication", level: 88, icon: <FaComments /> },
        { name: "Adaptability", level: 92, icon: <FaSyncAlt /> },
        { name: "Time Management", level: 87, icon: <FaClock /> }
      ]
    }
  ]

  return (
    <section id="skills" ref={skillsRef} className="section-container py-16 md:py-20 bg-gradient-to-b from-black via-black to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-4xl font-bold text-center mb-6 text-white opacity-0 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
            <span className="relative inline-block">
              <span className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10 blur-2xl"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                Skills & Expertise
              </span>
            </span>
          </h2>
          
          <p className={`text-center text-gray-400 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed opacity-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-5'}`}>
            A comprehensive showcase of my technical prowess and professional abilities, 
            refined through hands-on projects and real-world experience.
          </p>
          
          {/* Animated underline */}
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full opacity-0 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Mobile Category Selector */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-750 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{category.icon}</span>
                  <span className="text-sm">{category.title.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`${category.bgColor} border ${category.borderColor} rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2 ${
                // Mobile: only show active category, Desktop: show all
                categoryIndex === activeCategory || window.innerWidth >= 1024 ? 'block opacity-100' : 'hidden opacity-0'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${categoryIndex * 200}ms`,
                animation: isVisible ? `float 3s ease-in-out ${categoryIndex * 0.5}s infinite alternate` : 'none'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg mr-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full mt-2"></div>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-5 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group relative overflow-hidden"
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-sm">{skill.icon}</span>
                        </div>
                        <span className="text-gray-200 font-semibold text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full bg-gray-800 rounded-full h-3 md:h-3.5 overflow-hidden shadow-inner relative">
                      {/* Animated Progress Bar */}
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * category.skills.length + skillIndex) * 80}ms`
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      
                      {/* Progress Dots */}
                      <div className="absolute inset-0 flex justify-between items-center px-1">
                        {[0, 25, 50, 75, 100].map((dot) => (
                          <div 
                            key={dot}
                            className={`w-1 h-1 rounded-full ${
                              skill.level >= dot ? 'bg-white/50' : 'bg-gray-600/30'
                            } transition-all duration-300`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className={`text-center mt-16 opacity-0 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-5'}`}>
          <div className="inline-flex items-center space-x-4 text-gray-400 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Currently Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Proficient</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Expert</span>
            </div>
          </div>
        </div> */}

        {/* CTA Button */}
        {/* <div className={`text-center mt-12 opacity-0 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-5'}`}>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25">
            <span>Download Resume</span>
            <FaDownload className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Skills