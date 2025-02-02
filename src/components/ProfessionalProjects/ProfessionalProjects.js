import uniqid from 'uniqid'
import { professionalProjects } from '../../portfolio'
import ProfessionalProjectContainer from '../ProfessionalProjectContainer/ProfessionalProjectContainer'
import './ProfessionalProjects.css'

const ProfessionalProjects = () => {
  if (!professionalProjects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Professional Projects</h2>

      <div className='professional__projects__grid'>
        {professionalProjects.map((project) => (
          <ProfessionalProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProfessionalProjects
