import { useContext, useState, useEffect } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import LaunchIcon from '@material-ui/icons/Launch'
import { ThemeContext } from '../../contexts/theme'
import { about } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList((prev) => !prev)
  const closeNavList = () => setShowNavList(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showNavList) {
        closeNavList()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showNavList])

  return (
    <nav className='nav' aria-label='Main navigation'>
      <ul
        className={`nav__list ${showNavList ? 'nav__list--open' : ''}`}
        id='primary-navigation'
      >
        <li>
          <a href='#work' onClick={closeNavList} className='nav__link'>
            Selected Work
          </a>
        </li>
        <li>
          <a href='#experience' onClick={closeNavList} className='nav__link'>
            Experience
          </a>
        </li>
        <li>
          <a href='#capabilities' onClick={closeNavList} className='nav__link'>
            Capabilities
          </a>
        </li>
        <li>
          <a href='#about' onClick={closeNavList} className='nav__link'>
            About
          </a>
        </li>
        <li>
          <a href='#contact' onClick={closeNavList} className='nav__link'>
            Contact
          </a>
        </li>
        {about.resume && (
          <li>
            <a
              href={about.resume}
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeNavList}
              className='nav__link--resume'
            >
              <span>Résumé</span>
              <LaunchIcon style={{ fontSize: '0.85rem' }} />
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='nav__theme-btn'
        aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
      >
        {themeName === 'dark' ? (
          <WbSunnyRoundedIcon style={{ fontSize: '1.15rem' }} />
        ) : (
          <Brightness2Icon style={{ fontSize: '1.15rem' }} />
        )}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='nav__hamburger-btn'
        aria-label={showNavList ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={showNavList}
        aria-controls='primary-navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
