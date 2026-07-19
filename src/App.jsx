import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from "./components/Education.jsx";
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Publication from './components/Publication.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const toggleScrollTop = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', toggleScrollTop, { passive: true })
    toggleScrollTop()
    return () => window.removeEventListener('scroll', toggleScrollTop)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Publication />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      </>
  )
}

export default App
