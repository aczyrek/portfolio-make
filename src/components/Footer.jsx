import { certifications } from '../data/content'
import { useInView } from '../hooks/useInView'
import './Footer.css'

export default function Footer() {
  const [ref, inView] = useInView()

  return (
    <footer className="footer" id="contact" ref={ref}>
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">AC<span>.</span></span>
            <p className="footer__tagline">
              AI Automation Architect<br />& Technical Communication Specialist
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Get in touch</h4>
            <a href="mailto:adrian.czyrek5@gmail.com" className="footer__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              adrian.czyrek5@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-czyrek/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              linkedin.com/in/adrian-czyrek
            </a>
          </div>
        </div>


        <div className="footer__certifications">
          <div className="footer__certifications-grid">
            {certifications.map((cert, i) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className={`footer__cert-card fade-up${inView ? ' visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
                title={cert.title}
              >
                <img src={cert.image} alt={cert.title} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Adrian Czyrek. All rights reserved.</p>
          <p className="footer__built">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
