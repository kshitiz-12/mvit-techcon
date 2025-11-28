import MotionSection from '../components/MotionSection'

const contacts = [
  { role: 'TPC Helpdesk', name: 'Dr. Anitha T. N.', designation: 'TPC Chair, Professor and Head, Dept. of CSE, Sir MVIT', email: 'tpc@sirsmvit.edu', phone: '+91 XXX-XXX-XXXX' },
  { role: 'Sponsorship & Demos', name: 'Dr. E. Kavitha', designation: 'Publicity Chair, Professor and Head, Dept. of ETE, Sir MVIT', email: 'sponsor@sirsmvit.edu', phone: '+91 XXX-XXX-XXXX' },
  { role: 'Registration Desk', name: 'Dr. Jagadeesh H. S.', designation: 'Registration Chair, Professor Dept. of ECE, Sir MVIT', email: 'register@sirsmvit.edu', phone: '+91 XXX-XXX-XXXX' },
]

const Contact = () => {
  return (
    <div className="space-y-14">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Contact Sir M. Visvesvaraya Institute of Technology</p>
        <h1 className="mt-4 font-display text-4xl text-smvit-slate">A concierge desk for every delegate.</h1>
        <p className="mt-4 text-lg text-slate-600">
          Whether you are a presenting author, industry partner, media delegate, or student volunteer, our protocols team responds
          within one business day. Write to us for paper submissions, demo logistics, accommodation, visa support, or sponsorship
          opportunities.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8">
          <h2 className="text-2xl font-semibold text-smvit-slate">Send us a note</h2>
          <form className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-semibold text-smvit-slate">Full name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-smvit-accent/20 focus:ring"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-smvit-slate">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-smvit-accent/20 focus:ring"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-smvit-slate">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 90000 00000"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-smvit-accent/20 focus:ring"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-smvit-slate">How can we help?</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-smvit-accent/20 focus:ring">
                <option>Paper submission</option>
                <option>Registration</option>
                <option>Sponsorship & demos</option>
                <option>Visa & travel support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-smvit-slate">Message</label>
              <textarea
                rows={4}
                placeholder="Give us context so we can guide you better..."
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-smvit-accent/20 focus:ring"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-smvit-primary py-3 font-semibold text-white shadow shadow-smvit-primary/30 transition hover:-translate-y-0.5"
            >
              Submit inquiry
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-smvit-cream to-white p-8 shadow-glow">
          <h2 className="text-2xl font-semibold text-smvit-slate">Direct lines</h2>
          <div className="mt-6 grid gap-5">
            {contacts.map((contact) => (
              <div key={contact.role} className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-smvit-accent">{contact.role}</p>
                <p className="mt-2 text-lg font-semibold text-smvit-slate">{contact.name}</p>
                <p className="mt-1 text-sm text-slate-600">{contact.designation}</p>
                <a href={`mailto:${contact.email}`} className="mt-2 block text-sm text-smvit-primary underline decoration-dotted">
                  {contact.email}
                </a>
                <p className="mt-1 text-sm text-slate-600">{contact.phone}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600">
            Mailing Address: Sir M. Visvesvaraya Institute of Technology, International Airport Road, Bengaluru 562157 · IEEE Student
            Branch Code: 65843
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-5">
            <h3 className="mb-3 text-sm font-semibold text-smvit-slate">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/mediapublicity.sirmvit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:border-smvit-primary hover:bg-smvit-primary/5 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-slate-700 transition-colors group-hover:text-smvit-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/MVisvesvaraya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:border-smvit-primary hover:bg-smvit-primary/5 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 text-slate-700 transition-colors group-hover:text-smvit-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/school/sir-m-visvesvaraya-institute-of-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:border-smvit-primary hover:bg-smvit-primary/5 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-slate-700 transition-colors group-hover:text-smvit-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/iicsirmvit/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:border-smvit-primary hover:bg-smvit-primary/5 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-slate-700 transition-colors group-hover:text-smvit-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCGXonaDORX8mU8Ev6USoh9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:border-smvit-primary hover:bg-smvit-primary/5 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 text-slate-700 transition-colors group-hover:text-smvit-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <iframe
            title="SMVIT Map"
            className="mt-6 h-64 w-full rounded-3xl border border-slate-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.379651930029!2d77.651!3d13.0103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ffe24e0749%3A0xb9d93926ab9dd98b!2sSir%20M.%20Visvesvaraya%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1703070000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </MotionSection>
    </div>
  )
}

export default Contact

