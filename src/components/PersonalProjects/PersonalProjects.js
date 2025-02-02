import uniqid from 'uniqid'
import { personalProjects } from '../../portfolio'
import PersonalProjectContainer from '../PersonalProjectContainer/PersonalProjectContainer'
import './PersonalProjects.css'

const Projects = () => {
  if (!personalProjects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Personal Projects</h2>

      <div className='personal__projects__grid'>
        {personalProjects.map((project) => (
          <PersonalProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects