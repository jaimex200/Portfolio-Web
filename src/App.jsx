import './css/App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
