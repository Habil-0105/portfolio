import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <div className='header-wrapper'>
      <div className='container'>
        <header className='header'>
          <a href={homepage || '#top'} className='header__brand' aria-label='Habil — Homepage'>
            <span className='header__name'>{title || 'Habil.'}</span>
            <span className='header__badge'>Full-stack & Mobile</span>
          </a>
          <Navbar />
        </header>
      </div>
    </div>
  )
}

export default Header
