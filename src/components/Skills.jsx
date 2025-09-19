import { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
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
      icon: "💻",
      skills: [
        { name: "React.Js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 88 },
        { name: "React-BootStrap", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.Js", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "Express.Js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "AWS Cloud Services", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 65 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 88 },
        { name: "Adaptability", level: 92 },
        { name: "Time Management", level: 87 }
      ]
    }
  ]

  return (
    <section id="skills" ref={skillsRef} className="section-container py-10 md:py-10 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-orange-600 opacity-20 blur-md"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
              Skills & Expertise
            </span>
          </span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Here's a showcase of my technical skills and abilities that I've developed through projects and experience.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-gray-825 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-750 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * category.skills.length + skillIndex) * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Additional Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML5", 
              "CSS3", "Git", "AWS", "Vercel", "Firebase", "Tailwind",
              "Bootstrap", "REST APIs", "Postman", "VS Code", "Figma", "npm"
            ].map((tech, index) => (
              <div 
                key={index}
                className={`bg-gray-825 border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:border-orange-500 hover:shadow-lg ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 flex items-center justify-center mb-2">
                  <span className="text-white text-lg">{
                    tech === "React" ? "⚛️" :
                    tech === "Node.js" ? "🟢" :
                    tech === "MongoDB" ? "🍃" :
                    tech === "Express" ? "🚀" :
                    tech === "JavaScript" ? "📜" :
                    tech === "HTML5" ? "🌐" :
                    tech === "CSS3" ? "🎨" :
                    tech === "Git" ? "📦" :
                    tech === "AWS" ? "☁️" :
                    tech === "Vercel" ? "▲" :
                    tech === "Firebase" ? "🔥" :
                    tech === "Tailwind" ? "💨" :
                    tech === "Bootstrap" ? "🔷" :
                    tech === "REST APIs" ? "🔌" :
                    tech === "Postman" ? "📬" :
                    tech === "VS Code" ? "💻" :
                    tech === "Figma" ? "🎯" :
                    tech === "npm" ? "📦" : "✨"
                  }</span>
                </div>
                <span className="text-gray-300 text-sm font-medium text-center">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills