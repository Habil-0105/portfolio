import uniqid from 'uniqid'
import '../../style/ProjectContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons/faAppStoreIos'

const ProfessionalProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.playStore && (
      <a
        href={project.playStore}
        aria-label='source code'
        className='link link--icon'
      >
        <FontAwesomeIcon icon={faGooglePlay} />
      </a>
    )}

    {project.appStore && (
      <a
        href={project.appStore}
        aria-label='live preview'
        className='link link--icon'
      >
        <FontAwesomeIcon icon={faAppStoreIos} />
      </a>
    )}
  </div>
)

export default ProfessionalProjectContainer
