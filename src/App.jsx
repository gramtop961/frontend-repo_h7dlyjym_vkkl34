import Hero from './components/Hero'
import Problem from './components/Problem'
import Promise from './components/Promise'
import Proof from './components/Proof'
import Process from './components/Process'
import Offer from './components/Offer'
import Guarantee from './components/Guarantee'
import Founder from './components/Founder'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-techno text-xl tracking-wider bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Flames.Blue</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#problem" className="hover:text-gray-900">Problem</a>
            <a href="#promise" className="hover:text-gray-900">Promise</a>
            <a href="#proof" className="hover:text-gray-900">Proof</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#offer" className="hover:text-gray-900">Pricing</a>
          </nav>
          <a href="#offer" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white font-semibold shadow hover:shadow-lg hover:shadow-cyan-500/20 transition text-sm">Get Your Page →</a>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Promise />
        <Proof />
        <Process />
        <Offer />
        <Guarantee />
        <Founder />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
