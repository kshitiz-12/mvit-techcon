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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <>
    <div className="min-h-screen bg-slate-50 font-body text-slate-900 selection:bg-smvit-accent/30">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur relative">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:flex-row">
          <a href="/" className="flex items-center gap-4 text-smvit-slate">
            <img
              src="/SIR-LOGO.webp"
              alt="Sir M. Visvesvaraya Institute of Technology logo"
              className="h-16 w-16 rounded-3xl border border-slate-200 bg-white object-cover shadow-glow"
            />
            <span className="font-display text-2xl font-semibold">MVIT-TECHCON 2026</span>
          </a>
          <button
            type="button"
            className="lg:hidden rounded-2xl border border-slate-300 bg-white p-3 text-slate-700 shadow transition hover:bg-slate-50"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div
            className={`nav-shell absolute left-0 right-0 top-full w-full flex-col gap-3 border-t border-slate-200 bg-slate-900/95 px-6 py-4 text-white shadow-lg shadow-slate-900/20 lg:relative lg:top-0 lg:flex lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit ${
              mobileOpen ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
            <div className="relative w-full lg:w-auto">
              <button
                type="button"
                className={`nav-link flex items-center gap-2 ${dropdownOpen ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((prev) => !prev)}
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
                <div
                  className={`rounded-2xl border border-slate-700/60 bg-slate-900/95 p-2 shadow-lg shadow-cyan-500/30 ${
                    mobileOpen ? 'mt-2 w-full' : 'absolute right-0 mt-2 w-48'
                  }`}
                >
                  {secondaryLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                      onClick={() => {
                        setDropdownOpen(false)
                        setMobileOpen(false)
                      }}
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

