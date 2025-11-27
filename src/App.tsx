import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <>
    <div className="min-h-screen bg-slate-50 font-body text-slate-900 selection:bg-smvit-accent/30">
      <header className={`sticky top-0 z-30 relative transition-all duration-500 ${
        isHomePage 
          ? isScrolled
            ? 'border-b border-white/20 bg-gradient-to-r from-smvit-primary via-smvit-primaryDark to-smvit-primary shadow-glow-lg backdrop-blur-md'
            : 'border-b-0 bg-gradient-to-r from-smvit-primary/95 via-smvit-primaryDark/95 to-smvit-primary/95 backdrop-blur-sm'
          : 'border-b border-white/20 bg-gradient-to-r from-smvit-primary via-smvit-primaryDark to-smvit-primary shadow-glow-lg backdrop-blur'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:flex-row">
          <a href="/" className="group flex items-center gap-4 text-white transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100"></div>
              <img
                src="/SIR-LOGO.webp"
                alt="Sir M. Visvesvaraya Institute of Technology logo"
                className="relative h-16 w-16 rounded-3xl border-2 border-white/40 bg-white/10 object-cover shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/60 group-hover:shadow-xl group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold leading-tight tracking-tight lg:text-2xl">MVIT-TECHCON</span>
              <span className="text-xs font-medium text-white/80 lg:text-sm">2026</span>
            </div>
          </a>
          {/* Desktop Navigation - Direct children of nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `group relative text-base font-semibold tracking-wide text-white transition-all duration-300 outline-none focus:outline-none py-2 px-0 ${
                    isActive ? 'text-white' : 'hover:text-white/90'
                  }`
                }
                end={link.path === '/'}
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white via-smvit-accent to-white transition-all duration-300 group-hover:w-full nav-link-underline"></span>
                </span>
              </NavLink>
            ))}
            <div className="relative">
              <button
                type="button"
                className={`group relative flex items-center gap-2 text-base font-semibold tracking-wide text-white transition-all duration-300 outline-none focus:outline-none py-2 px-0 ${
                  dropdownOpen ? 'text-white' : 'hover:text-white/90'
                }`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <span className="relative inline-block">
                  Other Pages
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white via-smvit-accent to-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-56 rounded-xl border border-white/30 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-2 shadow-2xl"
                    style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' }}
                  >
                    {secondaryLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="group block rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:translate-x-1"
                        onClick={() => {
                          setDropdownOpen(false)
                        }}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-smvit-accent opacity-0 transition-opacity group-hover:opacity-100"></span>
                          {link.label}
                        </span>
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="group lg:hidden relative overflow-hidden rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md p-3 text-white shadow-lg transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-xl"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-5 w-5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {mobileOpen && (
            <div className="absolute left-0 right-0 top-full w-full flex-col gap-2 border-t border-white/20 bg-gradient-to-b from-smvit-primaryDark/98 to-smvit-primaryDark/95 backdrop-blur-xl px-6 py-6 shadow-2xl lg:hidden">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `group relative text-base font-semibold tracking-wide text-white transition-all duration-300 outline-none focus:outline-none py-2 px-0 ${
                      isActive ? 'text-white' : 'hover:text-white/90'
                    }`
                  }
                  end={link.path === '/'}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="relative inline-block">
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white via-smvit-accent to-white transition-all duration-300 group-hover:w-full nav-link-underline"></span>
                  </span>
                </NavLink>
              ))}
              <div className="relative w-full">
                <button
                  type="button"
                  className={`group relative flex items-center gap-2 text-base font-semibold tracking-wide text-white transition-all duration-300 outline-none focus:outline-none py-2 px-0 ${
                    dropdownOpen ? 'text-white' : 'hover:text-white/90'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span className="relative inline-block">
                    Other Pages
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white via-smvit-accent to-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 w-full rounded-xl border border-white/30 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-2 shadow-2xl"
                      style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' }}
                    >
                      {secondaryLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className="group block rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:translate-x-1"
                          onClick={() => {
                            setDropdownOpen(false)
                            setMobileOpen(false)
                          }}
                        >
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-smvit-accent opacity-0 transition-opacity group-hover:opacity-100"></span>
                            {link.label}
                          </span>
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
          {isHomePage && mobileOpen && (
            <div className="absolute left-0 right-0 top-full w-full flex-col gap-2 rounded-2xl border border-white/30 bg-white/95 backdrop-blur-md px-4 py-4 shadow-xl mt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="block rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-smvit-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="relative w-full">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-smvit-primary"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Other Pages</span>
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
                  <div className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                    {secondaryLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-smvit-primary"
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
          )}
        </nav>
      </header>

      <main className={`${location.pathname === '/' ? 'relative -mt-0' : 'mx-auto max-w-6xl px-6 py-12 md:py-16'}`}>
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

      <footer className="border-t border-smvit-primary/20 bg-gradient-to-r from-smvit-primary via-smvit-primaryDark to-smvit-primary py-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-white">MVIT-TECHCON 2026</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Conference on Network, Multimedia and Information Technology
              </p>
              <p className="mt-2 text-sm text-white/80">
                5–7 June 2026 · Bengaluru, India
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <NavLink to="/about-conference" className="hover:text-smvit-accent transition-colors">
                    About Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/paper-submission" className="hover:text-smvit-accent transition-colors">
                    Paper Submission
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/important-dates" className="hover:text-smvit-accent transition-colors">
                    Important Dates
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-smvit-accent transition-colors">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-white">Contact</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Sir M. Visvesvaraya Institute of Technology
              </p>
              <p className="mt-2 text-sm text-white/80">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/80">
            © {new Date().getFullYear()} Sir M. Visvesvaraya Institute of Technology · All rights reserved.
          </div>
        </div>
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

