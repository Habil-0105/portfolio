import { experience, honors } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience || experience.length === 0) return null

  return (
    <section className='section experience-section' id='experience'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-kicker'>Career Trajectory</div>
          <h2 className='section-title'>Professional & Educational Experience</h2>
          <p className='section-description'>
            Documented timeline separating commercial engineering at ORDO Apps,
            Exacode Systems, and PT Nusantara Infrastructure from challenge-based
            product engineering at Apple Developer Academy @ Infinite Learning.
          </p>
        </div>

        <div className='experience-timeline'>
          {experience.map((item) => (
            <article key={item.organization} className='experience-card'>
              <div className='experience-card__header'>
                <div className='experience-card__heading'>
                  <h3 className='experience-card__role'>{item.role}</h3>
                  <div className='experience-card__org'>{item.organization}</div>
                </div>

                <div className='experience-card__meta'>
                  <span className='experience-card__period'>{item.period}</span>
                  <span
                    className={`badge ${
                      item.type.includes('Commercial')
                        ? 'badge-accent'
                        : ''
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>

              <p className='experience-card__summary'>{item.summary}</p>

              {item.domains && item.domains.length > 0 && (
                <div className='experience-card__domains'>
                  <span className='domain-label'>Domains:</span>
                  {item.domains.map((domain) => (
                    <span key={domain} className='domain-tag'>
                      {domain}
                    </span>
                  ))}
                </div>
              )}

              {item.contributions && item.contributions.length > 0 && (
                <ul className='experience-card__contributions'>
                  {item.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className='experience-card__contribution-item'
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>
              )}

              {item.stack && item.stack.length > 0 && (
                <div className='experience-card__stack' aria-label='Technologies used'>
                  {item.stack.map((tech) => (
                    <span key={tech} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {honors && honors.length > 0 && (
          <div className='honors-section'>
            <div className='honors-header'>
              <h3 className='honors-title'>Honors, Competitions & Academic Recognition</h3>
              <p className='section-description' style={{ fontSize: '0.9375rem' }}>
                Competitive awards and academic milestones achieved throughout software engineering studies.
              </p>
            </div>

            <div className='honors-grid'>
              {honors.map((honor) => (
                <div key={honor.title} className='honor-card'>
                  <div>
                    <span className='honor-year'>{honor.year}</span>
                    <h4 className='honor-title'>{honor.title}</h4>
                    <div className='honor-org'>{honor.organization}</div>
                  </div>
                  <p className='honor-desc'>{honor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
