import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    const footerSection = document.getElementById('contact')
    if (footerSection) {
      observer.observe(footerSection)
    }
    
    return () => {
      if (footerSection) {
        observer.unobserve(footerSection)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      if (data.success) {
        console.log('✅ Email sent successfully:', data)
        
        // Store form data in localStorage as backup
        const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
        const newSubmission = {
          ...formData,
          timestamp: new Date().toISOString(),
          status: 'sent'
        }
        formSubmissions.push(newSubmission)
        localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions))
        
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('❌ Error sending email:', error)
      setSubmitError(error.message || 'Failed to send message. Please try again.')
      
      // Store failed submission in localStorage
      const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      }
      formSubmissions.push(newSubmission)
      localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer id="contact" className="section-container bg-gradient-to-b from-black to-black pt-10 pb-4">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-4 text-white opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-blue-600 opacity-10 blur-2xl"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Connect With Me
            </span>
          </span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className={`space-y-6 opacity-0 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-white">Let's connect</h3>
            <p className="text-gray-400">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-825 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="p-2 bg-indigo-900 rounded-full">
                  <FaEnvelope className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:dinakaranak001@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                    dinakaranak001@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-825 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="p-2 bg-indigo-900 rounded-full">
                  <FaPhone className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919940935315" className="text-white hover:text-indigo-400 transition-colors">
                    +91 99409 35315
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-825 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="p-2 bg-indigo-900 rounded-full">
                  <FaMapMarkerAlt className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://linkedin.com/in/dinakaran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-825 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://github.com/dinakaranak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-825 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="mailto:dinakaranak001@gmail.com" 
                  className="p-3 bg-gray-825 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} className="text-gray-300 group-hover:text-white" />
                </a>
                 <a 
                  href="https://www.instagram.com/_.dina._x_/?__pwa=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-825 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 group"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare size={20} className="text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`opacity-0 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="bg-gray-825 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              {isSubmitted && (
                <div className="bg-green-900 border border-green-700 text-green-200 p-4 rounded-lg mb-6">
                  <p className="font-semibold">✅ Message sent successfully!</p>
                  <p className="text-sm mt-1">Thank you for your message! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-900 border border-red-700 text-red-200 p-4 rounded-lg mb-6">
                  <p className="font-semibold">❌ Error sending message</p>
                  <p className="text-sm mt-1">{submitError}</p>
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dinakaran S. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer