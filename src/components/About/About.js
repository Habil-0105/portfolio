import LaunchIcon from '@material-ui/icons/Launch'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { resume } = about

  return (
    <section className='section about-section' id='about'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-kicker'>Perspective</div>
          <h2 className='section-title'>About & Approach to Software</h2>
          <p className='section-description'>
            Bridging technical architecture, intelligent on-device capabilities, and human-centered user experience.
          </p>
        </div>

        <div className='about-editorial-grid'>
          <div className='about-narrative'>
            <p className='about-paragraph about-paragraph--lead'>
              I am a software engineer focused on building resilient web services,
              native Apple platform applications, and cross-platform mobile systems.
            </p>

            <p className='about-paragraph'>
              My engineering foundation was built at Politeknik Elektronika Negeri
              Surabaya (PENS), where I graduated with Honors (Cum Laude, 3.68/4.00 GPA)
              in Informatics Engineering. My undergraduate thesis concentrated on computer
              vision, researching Faster R-CNN deep learning models for interactive object
              detection and language learning.
            </p>

            <p className='about-paragraph'>
              Across commercial roles at ORDO Apps, Exacode Systems, and PT Nusantara
              Infrastructure, I developed production Flutter applications, built Laravel
              and Node.js backend APIs, integrated native hardware capabilities (NFC and
              Kotlin computer vision channels), and managed store deployments across Google
              Play and the Apple App Store.
            </p>

            <p className='about-paragraph'>
              Currently at Apple Developer Academy @ Infinite Learning, I am engineering
              native iOS/macOS solutions—leveraging SwiftUI, CoreML, ARKit, MetalKit, and
              MVVM architecture across challenge domains from presentation practice and
              circadian travel to cinematography lighting and mental well-being.
            </p>

            <div className='about-actions'>
              {resume && (
                <a
                  href={resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary'
                >
                  <span>View Verified Résumé</span>
                  <LaunchIcon style={{ fontSize: '0.85rem' }} />
                </a>
              )}

              <a href='#contact' className='btn btn-secondary'>
                <MailOutlineIcon style={{ fontSize: '0.95rem' }} />
                <span>Contact Details</span>
              </a>
            </div>
          </div>

          <aside className='about-principles' aria-label='Guiding engineering principles'>
            <div className='principles-title'>Guiding Principles</div>

            <div className='principle-item'>
              <span className='principle-number'>01 / ARCHITECTURE</span>
              <h3 className='principle-heading'>Respect Platform Idioms</h3>
              <p className='principle-desc'>
                Building native iOS with Swift, SwiftUI, and CoreML where high-craft Apple
                ecosystem integration matters; choosing Flutter when multi-platform velocity
                is required—never forcing a compromise.
              </p>
            </div>

            <div className='principle-item'>
              <span className='principle-number'>02 / RELIABILITY</span>
              <h3 className='principle-heading'>Predictable Data & State</h3>
              <p className='principle-desc'>
                Decoupled MVVM patterns, strong type contracts, clean backend APIs, and
                deterministic offline-capable state transitions.
              </p>
            </div>

            <div className='principle-item'>
              <span className='principle-number'>03 / PRODUCT</span>
              <h3 className='principle-heading'>Feedback-Driven Iteration</h3>
              <p className='principle-desc'>
                Software should solve real human problems. Testing early with real users,
                observing bottlenecks, and refining until the experience is intuitive.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
