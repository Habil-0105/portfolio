import { useState } from 'react'
import { projects } from '../../portfolio'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import './Projects.css'

const CATEGORIES = [
  'All Work',
  'Native iOS',
  'Cross-Platform Mobile',
  'Open Source',
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Work')
  const [selectedProject, setSelectedProject] = useState(null)

  if (!projects || projects.length === 0) return null

  const filteredProjects =
    activeCategory === 'All Work'
      ? projects
      : projects.filter((p) => {
          if (activeCategory === 'Native iOS') return p.category === 'Native iOS'
          if (activeCategory === 'Cross-Platform Mobile')
            return p.category === 'Cross-Platform Mobile'
          if (activeCategory === 'Open Source') return p.category === 'Open Source'
          return true
        })

  const currentProjectIndex = selectedProject
    ? projects.findIndex((p) => p.id === selectedProject.id)
    : -1

  const handleNextProject = () => {
    if (currentProjectIndex === -1) return
    const nextIndex = (currentProjectIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  const handlePrevProject = () => {
    if (currentProjectIndex === -1) return
    const prevIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[prevIndex])
  }

  return (
    <section className='section projects-section' id='work'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title'>Selected Projects</h2>
          <p className='section-description'>
            Native iOS & macOS applications built at Apple Developer Academy, production Flutter applications, and open-source software.
          </p>
        </div>

        <div className='projects-filter' role='tablist' aria-label='Filter projects by category'>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type='button'
              role='tab'
              aria-selected={activeCategory === category}
              className={`filter-btn ${
                activeCategory === category ? 'filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      </div>
    </section>
  )
}

export default Projects
