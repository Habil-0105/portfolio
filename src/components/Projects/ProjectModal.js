import { useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@material-ui/icons/GitHub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons/faAppStoreIos'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay'
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
import './ProjectModal.css'

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  useEffect(() => {
    if (!project) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose, onNext, onPrev])

  if (!project) return null

  const {
    name,
    category,
    badge,
    tagline,
    description,
    role,
    stack,
    links,
    caseStudy,
  } = project

  return (
    <div
      className='modal-backdrop'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-project-title'
    >
      <button
        type='button'
        className='modal-backdrop-dismiss'
        onClick={onClose}
        aria-label='Close case study modal'
        tabIndex={0}
      />
      <div className='modal-drawer'>
        <div className='modal-header'>
          <div className='modal-header__meta'>
            <span className='badge badge-accent'>{category}</span>
            <span className='badge'>{badge}</span>
          </div>

          <div className='modal-header__actions'>
            {onPrev && (
              <button
                type='button'
                onClick={onPrev}
                className='modal-close-btn'
                aria-label='Previous project'
                title='Previous project'
              >
                <ArrowBackIcon fontSize='small' />
              </button>
            )}
            {onNext && (
              <button
                type='button'
                onClick={onNext}
                className='modal-close-btn'
                aria-label='Next project'
                title='Next project'
              >
                <ArrowForwardIcon fontSize='small' />
              </button>
            )}
            <button
              type='button'
              onClick={onClose}
              className='modal-close-btn'
              aria-label='Close case study modal'
              title='Close (Esc)'
            >
              <CloseIcon fontSize='small' />
            </button>
          </div>
        </div>

        <div className='modal-body'>
          <h2 id='modal-project-title' className='modal-title'>{name}</h2>
          <p className='modal-tagline'>{tagline}</p>

          {project.image && (
            <div className='modal-media'>
              <img
                src={project.image}
                alt={`${name} preview`}
                className='modal-img'
              />
            </div>
          )}

          <div className='modal-meta-grid'>
            <div>
              <div className='meta-item-label'>Role & Context</div>
              <div className='meta-item-val'>{role}</div>
            </div>
            <div>
              <div className='meta-item-label'>Platform & Domain</div>
              <div className='meta-item-val'>{category}</div>
            </div>
            <div>
              <div className='meta-item-label'>Organization / Affiliation</div>
              <div className='meta-item-val'>{badge}</div>
            </div>
          </div>

          <div className='modal-links-strip'>
            {links?.testFlight && (
              <a
                href={links.testFlight}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
              >
                <FontAwesomeIcon icon={faApple} />
                <span>TestFlight Beta</span>
                <LaunchIcon style={{ fontSize: '0.85rem' }} />
              </a>
            )}

            {links?.appStore && (
              <a
                href={links.appStore}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
              >
                <FontAwesomeIcon icon={faAppStoreIos} />
                <span>Apple App Store</span>
                <LaunchIcon style={{ fontSize: '0.85rem' }} />
              </a>
            )}

            {links?.playStore && (
              <a
                href={links.playStore}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                <FontAwesomeIcon icon={faGooglePlay} />
                <span>Google Play</span>
                <LaunchIcon style={{ fontSize: '0.85rem' }} />
              </a>
            )}

            {links?.sourceCode && (
              <a
                href={links.sourceCode}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                <GitHubIcon fontSize='small' />
                <span>GitHub Repository</span>
                <LaunchIcon style={{ fontSize: '0.85rem' }} />
              </a>
            )}
          </div>

          <div className='case-section'>
            <h3 className='case-section__heading'>Project Overview</h3>
            <p className='case-section__text'>{description}</p>
          </div>

          {caseStudy?.context && (
            <div className='case-section'>
              <h3 className='case-section__heading'>Context & Problem</h3>
              <p className='case-section__text'>{caseStudy.context}</p>
            </div>
          )}

          {caseStudy?.technicalApproach && (
            <div className='case-section'>
              <h3 className='case-section__heading'>Technical & Product Approach</h3>
              <p className='case-section__text'>{caseStudy.technicalApproach}</p>
            </div>
          )}

          {caseStudy?.decisions && caseStudy.decisions.length > 0 && (
            <div className='case-section'>
              <h3 className='case-section__heading'>Key Engineering Decisions</h3>
              <ul className='case-list'>
                {caseStudy.decisions.map((decision) => (
                  <li key={decision} className='case-list__item'>
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy?.outcomes && caseStudy.outcomes.length > 0 && (
            <div className='case-section'>
              <h3 className='case-section__heading'>Outcomes & Learnings</h3>
              <ul className='case-list'>
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome} className='case-list__item'>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='case-section'>
            <h3 className='case-section__heading'>Technologies Used</h3>
            <div className='project-card__stack'>
              {stack.map((tech) => (
                <span key={tech} className='tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='modal-footer-nav'>
            <button
              type='button'
              onClick={onClose}
              className='btn btn-secondary'
            >
              Close Case Study
            </button>

            {onNext && (
              <button
                type='button'
                onClick={onNext}
                className='btn btn-subtle'
              >
                <span>Next Project</span>
                <ArrowForwardIcon style={{ fontSize: '0.9rem' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
