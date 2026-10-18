import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer' role='contentinfo'>
      <div className='container'>
        <div className='footer-inner'>
          <div className='footer-brand'>
            <span className='footer-name'>{about.name || 'Habil'}</span>
            <span className='footer-role'>Full-stack & Mobile Developer</span>
          </div>

          <nav className='footer-nav' aria-label='Footer navigation'>
            <a href='#work' className='footer-link'>Selected Work</a>
            <a href='#experience' className='footer-link'>Experience</a>
            <a href='#capabilities' className='footer-link'>Capabilities</a>
            <a href='#about' className='footer-link'>About</a>
            <a href='#contact' className='footer-link'>Contact</a>
            {about.resume && (
              <a
                href={about.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='footer-link'
              >
                Résumé ↗
              </a>
            )}
          </nav>
        </div>

        <div className='footer-bottom'>
          <div>
            © {currentYear} {about.name || 'Habil'}. Built with React & editorial design principles.
          </div>

          <a href='#top' className='footer-back-to-top' aria-label='Back to top of page'>
            <span>Return to top</span>
            <ArrowUpwardIcon style={{ fontSize: '0.85rem' }} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
