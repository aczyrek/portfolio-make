import './ProjectCard.css'

export default function ProjectCard({ project, onSchema, index, inView }) {
  const reversed = index % 2 !== 0

  return (
    <article
      className={`pcard fade-up${inView ? ' visible' : ''}${reversed ? ' pcard--reversed' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image side */}
      <div className="pcard__image-wrap">
        <img src={project.image} alt={project.title} className="pcard__image" />
        <div className="pcard__image-overlay" />
        <div className="pcard__tags">
          {project.tags.map(tag => (
            <span key={tag} className="pcard__tag">{tag}</span>
          ))}
        </div>
        <div className="pcard__number">{project.number}</div>
      </div>

      {/* Info side */}
      <div className="pcard__info">
        <div className="pcard__meta">
          <span className="pcard__category">{project.category}</span>
        </div>

        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>

        <div className="pcard__details">
          {[
            { label: 'Challenge', value: project.challenge },
            { label: 'Solution', value: project.solution },
            { label: 'Result', value: project.result, highlight: true },
          ].map(({ label, value, highlight }) => (
            <div key={label} className="pcard__detail">
              <span className="pcard__detail-label">{label}</span>
              <span className={`pcard__detail-value${highlight ? ' pcard__detail-value--highlight' : ''}`}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="pcard__actions">
          <button className="btn btn--outline" onClick={() => onSchema(project)}>
            View Flow Schema
          </button>
          <a
            href={project.blueprint}
            download={project.filename}
            className="btn btn--muted"
          >
            📦 Blueprint JSON
          </a>
        </div>
      </div>
    </article>
  )
}
