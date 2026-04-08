import { expertise, certifications } from '../data/content'
import { useInView } from '../hooks/useInView'
import './Expertise.css'

export default function Expertise() {
  const [ref, inView] = useInView()

  return (
    <section className="expertise section" id="expertise" ref={ref}>
      <div className="container">
        <div className={`expertise__header fade-up${inView ? ' visible' : ''}`}>
          <div className="section-eyebrow">
            <span>01 / expertise</span>
          </div>
          <h2 className="section-title">
            Tech Stack <em>&amp;</em> Tools
          </h2>
          <p className="expertise__lead">
            The technologies and methodologies behind every automation I build.
          </p>
        </div>

        <div className="expertise__grid">
          {expertise.map((item, i) => (
            <div
              key={item.number}
              className={`expertise-card fade-up${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="expertise-card__number">{item.number}</div>
              <div className="expertise-card__body">
                <h3 className="expertise-card__title">{item.title}</h3>
                <p className="expertise-card__desc">{item.description}</p>
                <div className="expertise-card__tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="expertise-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="expertise-card__glow" />
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="certifications__title fade-up">Certified Architect</h3>
          <div className="certifications__grid">
            {certifications.map((cert, i) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className={`certification-card fade-up${inView ? ' visible' : ''}`}
                style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
                title={cert.title}
              >
                <img src={cert.image} alt={cert.title} className="certification-card__img" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
