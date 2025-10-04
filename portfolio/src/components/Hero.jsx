import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'

// Replace these imports with your actual assets
import profileImage from '../assets/profile.jpg'
import pdf from '../assets/Resume_Dinakaran.pdf'

const Hero = () => {
  return (
         <div className="section-container bg-gradient-to-b from-black to-black pt-16 pb-8">
          {/* className="section-container bg-gradient-to-b from-gray-900 to-gray-800 pt-16 pb-8" */}
      
    <section id="about" className="min-h-screen flex items-center justify-center  bg-gradient-to-b from-black to-black pt-16 pb-8
     section-container md:pt-6 px-4">
      <div className="container max-w-8xl mx-auto grid md:grid-cols-2  items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Dinakaran <span className="text-blue-400">S</span>
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 min-h-[1.5rem] md:min-h-[2rem] text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto md:mx-0 text-sm md:text-base mb-6 md:mb-10 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I am a MERN Stack Developer with 7 months of hands-on experience in building scalable 
            web applications. I have worked on multiple projects, including React Native 
            mobile apps with TypeScript for Android, as well as Electron.js desktop applications 
            such as billing software. My expertise also extends to developing responsive React websites, 
            ensuring seamless functionality across platforms. I am passionate about full-stack development
             and constantly exploring  new technologies to deliver efficient and user-friendly solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <motion.a 
              href="#contact" 
              className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope size={14} className="md:size-4" />
              Contact Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="px-4 py-2 md:px-6 md:py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href={pdf} 
              download="Dinakaran_Resume.pdf"
              className="px-4 py-2 md:px-6 md:py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-black transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload size={14} className="md:size-4" />
              Resume
            </motion.a>
          </motion.div>
          
          {/* <motion.div 
            className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone size={12} className="md:size-4" />
              <p>+91 99409 35315</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope size={12} className="md:size-4" />
              <p>dinakaranak001@gmail.com</p>
            </div>
            <p className="text-center md:text-left">Coimbatore, Tamil Nadu</p>
            
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <motion.a 
                href="https://linkedin.com/in/dinakaran" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin size={16} className="md:size-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/dinakaranak" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGithub size={16} className="md:size-5" />
              </motion.a>
              <motion.a 
                href="http://www.dinakaran.shop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGlobe size={16} className="md:size-5" />
              </motion.a>
            </div>
          </motion.div> */}
        </motion.div>
        
        {/* Image Content */}
        <motion.div 
          className="flex justify-center md:justify-end items-center order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="relative">
            <motion.div 
              className="w-56 h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden   shadow-2xl shadow-blue-500/30 mx-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={profileImage} 
                alt="Dinakaran S" 
                className=""
              />
            </motion.div>
            
            {/* Floating elements for visual interest */}
            <motion.div 
              className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-blue-600 opacity-20"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-600 opacity-20"
              animate={{ 
                y: [0, 8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-1/2 -left-4 md:-left-8 w-6 h-6 md:w-10 md:h-10 rounded-full bg-green-500 opacity-20"
              animate={{ 
                x: [0, 8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Hero