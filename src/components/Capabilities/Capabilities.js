import { capabilities } from '../../portfolio'
import './Capabilities.css'

const Capabilities = () => {
  if (!capabilities || capabilities.length === 0) return null

  return (
    <section className='section capabilities-section' id='capabilities'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-kicker'>Technical Expertise</div>
          <h2 className='section-title'>Core Capabilities & Engineering Stack</h2>
          <p className='section-description'>
            Grounded in actual production deployments and active product
            development. Grouped by engineering discipline without arbitrary
            ratings or simulated metrics.
          </p>
        </div>

        <div className='capabilities-grid'>
          {capabilities.map((group) => (
            <div key={group.title} className='capability-card'>
              <div className='capability-card__header'>
                <h3 className='capability-card__title'>{group.title}</h3>
                <p className='capability-card__desc'>{group.description}</p>
              </div>

              <div className='capability-card__list'>
                {group.skills.map((item) => (
                  <div key={item.name} className='capability-item'>
                    <span className='capability-name'>{item.name}</span>
                    <span className='capability-note'>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
