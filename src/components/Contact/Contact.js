import { useState } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CheckIcon from '@material-ui/icons/Check'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const email = contact.email || about.social?.email || 'habil0105@gmail.com'
  const phone = contact.phone || '+6282268159542'
  const location = contact.location || about.location || 'Batam, Indonesia'

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  return (
    <section className='section contact-section' id='contact'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-kicker'>Initiate Contact</div>
          <h2 className='section-title'>Let’s Discuss Opportunities & Engineering</h2>
          <p className='section-description'>
            Available for full-stack, native iOS, and cross-platform mobile
            engineering roles, client engagements, and technical collaborations.
          </p>
        </div>

        <div className='contact-card'>
          <div className='contact-primary'>
            <div>
              <h3 className='contact-headline'>Direct inquiries & collaboration</h3>
              <p className='contact-subtext'>
                Whether evaluating candidates for software engineering positions,
                seeking a reliable engineer for client software, or discussing
                mobile architecture—reach out directly.
              </p>
            </div>

            <div className='contact-email-box'>
              <span className='contact-email-text'>{email}</span>
              <button
                type='button'
                onClick={handleCopyEmail}
                className={`contact-copy-btn ${
                  copied ? 'contact-copy-btn--copied' : ''
                }`}
                aria-label='Copy email to clipboard'
              >
                {copied ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckIcon style={{ fontSize: '0.85rem' }} />
                    Copied
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <FileCopyIcon style={{ fontSize: '0.85rem' }} />
                    Copy
                  </span>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className='btn btn-primary'
                style={{ marginLeft: 'auto' }}
              >
                <MailOutlineIcon style={{ fontSize: '1rem' }} />
                <span>Compose Mail</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--clr-fg-muted)', fontSize: '0.875rem' }}>
                <LocationOnIcon fontSize='small' style={{ color: 'var(--clr-accent)' }} />
                <span>{location}</span>
              </div>
              <a
                href={`tel:${phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--clr-fg-muted)', fontSize: '0.875rem' }}
              >
                <PhoneIcon fontSize='small' style={{ color: 'var(--clr-accent)' }} />
                <span>{phone}</span>
              </a>
            </div>
          </div>

          <div className='contact-channels' aria-label='Verified professional profiles'>
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-channel-item'
              >
                <div className='channel-info'>
                  <LinkedInIcon />
                  <div>
                    <div className='channel-label'>LinkedIn</div>
                    <div className='channel-sub'>Professional profile</div>
                  </div>
                </div>
                <LaunchIcon style={{ fontSize: '0.9rem' }} />
              </a>
            )}

            {contact.github && (
              <a
                href={contact.github}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-channel-item'
              >
                <div className='channel-info'>
                  <GitHubIcon />
                  <div>
                    <div className='channel-label'>GitHub</div>
                    <div className='channel-sub'>Public repositories</div>
                  </div>
                </div>
                <LaunchIcon style={{ fontSize: '0.9rem' }} />
              </a>
            )}

            {about.resume && (
              <a
                href={about.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-channel-item'
              >
                <div className='channel-info'>
                  <LaunchIcon />
                  <div>
                    <div className='channel-label'>Verified Résumé</div>
                    <div className='channel-sub'>PDF document (Google Drive)</div>
                  </div>
                </div>
                <LaunchIcon style={{ fontSize: '0.9rem' }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
