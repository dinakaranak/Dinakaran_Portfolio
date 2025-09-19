import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Logos from './Logos'
// import SplashCursor from './Animation/SplashCursor'


const Home = () => {
  return (
    <>
      {/* <SplashCursor /> */}
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Logos />
      <Skills />
      <Footer />
    </>
  )
}

export default Home