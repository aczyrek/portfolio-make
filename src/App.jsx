import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="bg-glow bg-glow--tl" />
      <div className="bg-glow bg-glow--br" />
      <div className="grid-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
