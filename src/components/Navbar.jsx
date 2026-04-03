import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={e => handleClick(e, '#about')}>
          AC<span>.</span>
        </a>
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link${active === l.href ? ' navbar__link--active' : ''}`}
                onClick={e => handleClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn--primary" onClick={e => handleClick(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
