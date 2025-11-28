import MotionSection from '../components/MotionSection'

const highlights = [
  {
    title: 'Multi-Disciplinary Research',
    detail:
      'FESCIS 2026 focuses on exploring, enhancing and empowering multi-disciplinary and multi-institutional research based on Future Electronics, Sustainable Computing & Intelligent Systems.',
  },
  {
    title: 'IEEE-aligned Review Process',
    detail:
      'Double-blind peer review ensuring high-quality submissions. All accepted papers will be submitted to IEEE Xplore Digital Library and indexed on Scopus.',
  },
  {
    title: 'Industry-Academia Collaboration',
    detail: 'A platform for researchers, academicians, industry professionals, and students to share knowledge and collaborate on cutting-edge research.',
  },
]

const tracks = [
  'Microelectronics & Integrated Circuits',
  'Smart Sensors & Actuators',
  'Embedded Systems & IoT',
  'Microwave and Antenna for Smart Communication',
  'Wireless Communication and Signal Processing',
  'Sustainable Computing & Green Technologies',
  'Artificial Intelligence',
  'Data Science & Cybersecurity',
  'Software Automation',
  'GSM Cellular Networks & Next-Generation Networks',
]

const legacyStats = [
  {
    title: 'About FESCIS 2026',
    detail:
      'International Conference on Future Electronics, Sustainable Computing & Intelligent Systems (FESCIS) 2026 serves as a premier platform for researchers, scientists, academicians, and industry experts to share opinions, new ideas, frameworks, and innovative technologies.',
  },
  {
    title: 'IEEE Student Branch',
    detail:
      'IEEE SB Sir M. Visvesvaraya Institute of Technology has been actively promoting research and innovation. The branch organizes seminars, workshops, and competitions that expose students to global experts and industry leaders.',
  },
]

const AboutConference = () => {
  return (
    <div className="space-y-14">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">About FESCIS</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Designing resilient, human-centered technology futures.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The primary goal of FESCIS 2026 is to promote research and developmental activities across Future Electronics, Sustainable Computing, and Intelligent Systems. The conference aims to address critical problems in engineering sciences and healthcare, making a revolutionary contribution to social welfare through science and technology.
        </p>
        <p className="mt-4 text-lg text-slate-600">
          FESCIS 2026 has a high impact on the IEEE Bangalore Section regarding advances in intelligent computing for engineering, sciences, healthcare, energy, and environment. The scope includes interdisciplinary, emerging, and thrust areas focusing on cognitive computing for complex problem-solving and multi-disciplinary research on national growth.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="glass-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Conference objectives</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
              <li>Explore, enhance and empower multi-disciplinary and multi-institutional research in Future Electronics, Sustainable Computing & Intelligent Systems.</li>
              <li>Provide recent developments in intelligent networks, multimedia processing, and information systems in emerging fields of Engineering & Technology.</li>
              <li>Focus on identifying challenges and solutions through an integrated approach, shaping the path for new research dimensions.</li>
              <li>Foster collaboration between academia and industry to drive innovation and societal progress.</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Conference tracks</p>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tracks.map((track) => (
                <li key={track} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-smvit-accent"></span>
                  <span className="text-sm">{track}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-2">
        {legacyStats.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Conference details</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Conference Date:</strong> 3rd and 4th December 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Venue:</strong> Sir M. Visvesvaraya Institute of Technology, Bengaluru, India</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Full Paper Submission:</strong> 1st August 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Acceptance Notification:</strong> 1st October 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Registration Deadline:</strong> 7th October 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              <span><strong>Camera Ready Paper:</strong> 15th October 2026</span>
            </li>
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Previous publications</p>
            <p className="mt-3 text-lg text-slate-600">
              All accepted papers will be submitted to the IEEE Xplore Digital Library (subject to scope and quality checks) and indexed on Scopus. FESCIS 2026 ensures archival visibility for every accepted submission, providing authors with global recognition and citation opportunities.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Browse previous proceedings</p>
            <a
              href="https://ieeexplore.ieee.org/xpl/conhome/1851010/all-proceedings"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-smvit-primary underline"
            >
              IEEE Xplore · FESCIS archives
            </a>
            <p className="mt-3">
              All accepted papers will be published in the conference proceedings and submitted to IEEE Xplore. The 2026 manuscripts will follow IEEE archival workflow with camera-ready compliance checks and quality assurance.
            </p>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}

export default AboutConference

