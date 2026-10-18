import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Capabilities from './components/Capabilities/Capabilities'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main id='main-content'>
        <Hero />
        <Projects />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
