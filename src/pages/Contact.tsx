import MotionSection from '../components/MotionSection'

const contacts = [
  { role: 'TPC Helpdesk', name: 'XYZ', email: 'tpc@sirsmvit.edu', phone: '+91 99807 44110' },
  { role: 'Sponsorship & Demos', name: 'XYZ', email: 'sponsor@sirsmvit.edu', phone: '+91 98450 88122' },
  { role: 'Registration Desk', name: 'XYZ', email: 'register@sirsmvit.edu', phone: '+91 91136 11990' },
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
                <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-smvit-primary underline decoration-dotted">
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

