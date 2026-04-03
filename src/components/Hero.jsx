import { useEffect, useRef } from 'react'
import { stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import FlowDiagram from './FlowDiagram'
import './Hero.css'

function StatItem({ stat, started }) {
  const count = useCountUp(stat.value, 1400, started)
  return (
    <div className="hero-stat">
      <span className="hero-stat__number">
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="hero-stat__label">{stat.label}</span>
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView()

  return (
    <section className="hero section" id="about" ref={ref}>
      <div className="hero__inner container">
        {/* Left: copy */}
        <div className={`hero__copy fade-up${inView ? ' visible' : ''}`}>
          <div className="label-tag">
            <span className="hero__badge-dot" />
            AI Automation Architect
          </div>

          <h1 className="hero__title">
            Optimization<br />Through{' '}
            <span className="hero__title-gradient">Automation</span>
          </h1>

          <p className="hero__subtitle">
            I design intelligent work ecosystems connecting human creativity with
            machine precision — boosting team productivity through AI‑powered
            pipelines and no‑code automation.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary btn--lg">
              View Case Studies
            </a>
            <a href="#expertise" className="btn btn--ghost btn--lg">
              My Tech Stack
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s, i) => (
              <>
                <StatItem key={i} stat={s} started={inView} />
                {i < stats.length - 1 && <div key={`d${i}`} className="hero__stat-divider" />}
              </>
            ))}
          </div>
        </div>

        {/* Right: animated flow diagram */}
        <div className={`hero__visual fade-up${inView ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}
