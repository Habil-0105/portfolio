import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import LaunchIcon from '@material-ui/icons/Launch'
import { about } from '../../portfolio'
import './Hero.css'

const Hero = () => {
  const { headline, subhead, resume, social, status, metrics } = about

  return (
    <section className='hero' id='top'>
      <div className='container'>
        {status && (
          <div className='hero__status'>
            <span className='hero__status-dot' aria-hidden='true' />
            <span>{status}</span>
          </div>
        )}

        <h1 className='hero__title'>
          Full-stack engineering.{' '}
          <span className='hero__title-italic'>Native iOS</span> & cross-platform mobile.
        </h1>

        <p className='hero__subtitle'>
          {subhead || headline}
        </p>

        <div className='hero__actions'>
          <a href='#work' className='btn btn-primary'>
            <span>Explore Selected Work</span>
            <ArrowDownwardIcon style={{ fontSize: '1rem' }} />
          </a>

          {resume && (
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary'
            >
              <span>View Verified Résumé</span>
              <LaunchIcon style={{ fontSize: '0.9rem' }} />
            </a>
          )}

          <div className='hero__social'>
            {social?.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-icon'
                aria-label='GitHub profile'
                title='GitHub'
              >
                <GitHubIcon fontSize='small' />
              </a>
            )}

            {social?.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-icon'
                aria-label='LinkedIn profile'
                title='LinkedIn'
              >
                <LinkedInIcon fontSize='small' />
              </a>
            )}

            {social?.email && (
              <a
                href={`mailto:${social.email}`}
                className='btn-icon'
                aria-label='Send email to Habil'
                title='Email'
              >
                <MailOutlineIcon fontSize='small' />
              </a>
            )}
          </div>
        </div>

        {metrics && metrics.length > 0 && (
          <div className='hero__metrics'>
            {metrics.map((item) => (
              <div key={item.label} className='hero__metric-card'>
                <div className='hero__metric-val'>{item.value}</div>
                <div className='hero__metric-label'>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
