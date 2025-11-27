import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutConference from './pages/AboutConference'
import PaperSubmission from './pages/PaperSubmission'
import RegistrationFees from './pages/RegistrationFees'
import ImportantDates from './pages/ImportantDates'
import KeyCommittees from './pages/KeyCommittees'
import KeySpeakers from './pages/KeySpeakers'
import Contact from './pages/Contact'

const navLinks = [
  { label: 'About Conference', path: '/about-conference' },
  { label: 'Paper Submission', path: '/paper-submission' },
  { label: 'Important Dates', path: '/important-dates' },
  { label: 'Contact', path: '/contact' },
]

const secondaryLinks = [
  { label: 'Registration Fees', path: '/registration' },
  { label: 'Key Committees', path: '/key-committees' },
  { label: 'Key Speakers', path: '/key-speakers' },
]

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

const AppContent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
    <div className="min-h-screen bg-slate-50 font-body text-slate-900 selection:bg-smvit-accent/30">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="flex items-center gap-4 text-smvit-slate">
            <img
              src="/SIR-LOGO.webp"
              alt="Sir M. Visvesvaraya Institute of Technology logo"
              className="h-16 w-16 rounded-3xl border border-slate-200 bg-white object-cover shadow-glow"
            />
            <span className="font-display text-2xl font-semibold">MVIT-TECHCON 2026</span>
          </a>
          <div className="nav-shell order-2 w-full lg:order-none lg:w-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link flex items-center gap-2 ${dropdownOpen ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <span>Other Pages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-2 shadow-lg shadow-cyan-500/30">
                  {secondaryLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-conference" element={<AboutConference />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/registration" element={<RegistrationFees />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/key-committees" element={<KeyCommittees />} />
          <Route path="/key-speakers" element={<KeySpeakers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sir M. Visvesvaraya Institute of Technology · Bengaluru, India.
      </footer>
    </div>

    <div className="fixed bottom-6 right-6 z-40 flex max-w-xs items-start gap-3 rounded-2xl border border-yellow-200 bg-amber-50/95 p-4 text-sm text-amber-800 shadow-lg shadow-amber-200">
      <span className="text-2xl" role="img" aria-label="maintenance bot">
        🤖
      </span>
      <div>
        <p className="font-semibold">Site under maintenance</p>
        <p className="text-xs">We’re tuning MVIT-TECHCON systems. Expect occasional sparks!</p>
      </div>
    </div>
    </>
  )
}

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
)

export default App

