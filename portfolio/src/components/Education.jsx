import { useState, useEffect } from 'react'
import { FaGraduationCap, FaBook } from 'react-icons/fa'

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const education = [
    {
      institution: "Adithya Institute Of Technology",
      degree: "B.Tech (Information Technology)",
      period: "Oct 2021 – May 2025",
      details: "CGPA: 8.2/10.0",
      icon: <FaGraduationCap className="text-white" />,
      highlights: [
        "Focus on Software Engineering",
        "Relevant coursework: Data Structures, Algorithms, Web Technologies",
        "Final Year Project: Diabetes Prediction Using Machine Learning"
      ]
    },
    {
      institution: "Shri Ramana Vikass, Sivaganga",
      degree: "HSC",
      period: "Jun 2020 – May 2021",
      details: "Percentage: 85%",
      icon: <FaBook className="text-white" />,
      highlights: [
        "Maths Stream with Computer Maths",
        "Participated in Science Exhibition",
        "Member of Computer Club"
      ]
    }
  ]

  useEffect(() => {
    // Animation on scroll
    const handleScroll = () => {
      const element = document.getElementById('education');
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
    <section id="education" className="section-container py-10 md:py-10 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className={`section-title text-2xl md:text-4xl font-bold text-center mb-16 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-blue-600 opacity-10 blur-md"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Education
            </span>
          </span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-10 bottom-20 w-1 bg-gradient-to-b from-blue-500 to-blue-400 transform -translate-x-1/2 md:translate-x-0 rounded-full"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} opacity-0 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transform -translate-x-1/2 md:translate-x-0 z-10 flex items-center justify-center">
                  <span className="text-sm">{edu.icon}</span>
                </div>
                
                {/* Content card */}
                <div className="ml-12 md:ml-0 md:w-1/2 bg-gray-825 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{edu.institution}</h3>
                    <span className="bg-gradient-to-r from-blue-800 to-blue-600 text-purple-100 px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {edu.degree}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 font-medium">{edu.details}</p>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-4 top-1/3 w-24 h-24 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -right-4 bottom-1/4 w-24 h-24 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Education