import { useState } from 'react'
import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'
import ProjectCard from './ProjectCard'
import SchemaModal from './SchemaModal'
import './Projects.css'

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className={`projects__header fade-up${inView ? ' visible' : ''}`}>
          <div className="section-eyebrow">
            <span>02 / projects</span>
          </div>
          <h2 className="section-title">
            Completed <em>Projects</em>
          </h2>
          <p className="projects__lead">
            Real-world automations built for production — each with a downloadable Make.com blueprint.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onSchema={setActiveProject}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <SchemaModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
