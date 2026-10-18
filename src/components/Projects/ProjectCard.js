import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import GitHubIcon from '@material-ui/icons/GitHub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons/faAppStoreIos'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay'
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'

const ProjectCard = ({ project, onSelectCaseStudy }) => {
  const {
    name,
    category,
    badge,
    image,
    tagline,
    description,
    role,
    stack,
    links,
  } = project

  return (
    <article className='project-card'>
      {image && (
        <div className='project-card__media'>
          <img
            src={image}
            alt={`${name} screenshot`}
            className='project-card__img'
            loading='lazy'
          />
        </div>
      )}

      <div className='project-card__body'>
        <div className='project-card__meta'>
          <span className='project-card__category'>{category}</span>
          <span className='project-card__dot' aria-hidden='true'>•</span>
          <span className='project-card__badge'>{badge}</span>
        </div>

        <h3 className='project-card__title'>{name}</h3>
        {tagline && <p className='project-card__tagline'>{tagline}</p>}

        <p className='project-card__description'>{description}</p>

        {role && (
          <div className='project-card__role'>
            <span className='project-card__role-label'>Role</span>
            <span className='project-card__role-val'>{role}</span>
          </div>
        )}

        <div className='project-card__stack' aria-label='Technologies'>
          {stack.map((item) => (
            <span key={item} className='tech-tag'>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='project-card__footer'>
        <div className='project-card__links'>
          {links?.testFlight && (
            <a
              href={links.testFlight}
              target='_blank'
              rel='noopener noreferrer'
              className='store-link'
              aria-label={`${name} on TestFlight`}
              title='TestFlight Beta'
            >
              <FontAwesomeIcon icon={faApple} />
              <span>TestFlight</span>
            </a>
          )}

          {links?.appStore && (
            <a
              href={links.appStore}
              target='_blank'
              rel='noopener noreferrer'
              className='store-link'
              aria-label={`${name} on App Store`}
              title='App Store'
            >
              <FontAwesomeIcon icon={faAppStoreIos} />
              <span>App Store</span>
            </a>
          )}

          {links?.playStore && (
            <a
              href={links.playStore}
              target='_blank'
              rel='noopener noreferrer'
              className='store-link'
              aria-label={`${name} on Google Play`}
              title='Google Play'
            >
              <FontAwesomeIcon icon={faGooglePlay} />
              <span>Google Play</span>
            </a>
          )}

          {links?.sourceCode && (
            <a
              href={links.sourceCode}
              target='_blank'
              rel='noopener noreferrer'
              className='store-link'
              aria-label={`${name} source code on GitHub`}
              title='View Source Code'
            >
              <GitHubIcon style={{ fontSize: '0.95rem' }} />
              <span>Code</span>
            </a>
          )}
        </div>

        <button
          type='button'
          onClick={() => onSelectCaseStudy(project)}
          className='case-study-trigger'
          aria-label={`View details and case study for ${name}`}
        >
          <span>View Details</span>
          <ArrowForwardIcon style={{ fontSize: '0.95rem' }} />
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
