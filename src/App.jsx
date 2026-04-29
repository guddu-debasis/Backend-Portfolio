import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import LeetCode from './components/LeetCode'
import Footer from './components/Footer'

function App() {
  return (
    <div className="noise" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="grid-bg min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <LeetCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
