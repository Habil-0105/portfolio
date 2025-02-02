import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import ProfessionalProjects from './components/ProfessionalProjects/ProfessionalProjects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import './App.css'
import PersonalProjects from './components/PersonalProjects/PersonalProjects'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <ProfessionalProjects />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  )
}

export default App
