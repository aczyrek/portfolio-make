import { useEffect } from 'react'
import './SchemaModal.css'

export default function SchemaModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal__box">
        <div className="modal__header">
          <div>
            <p className="modal__category">{project.category}</p>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="modal__flow">
          {project.schema.map((step, i) => (
            <div key={i} className="modal__step">
              <div className="modal__node">
                <div className="modal__node-icon">{step.icon}</div>
                <div className="modal__node-name">{step.name}</div>
                <div className="modal__node-desc">{step.desc}</div>
              </div>
              {i < project.schema.length - 1 && (
                <div className="modal__arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="modal__footer">
          <a
            href={project.blueprint}
            download={project.filename}
            className="btn btn--outline"
          >
            📦 Download Blueprint (JSON)
          </a>
        </div>
      </div>
    </div>
  )
}
