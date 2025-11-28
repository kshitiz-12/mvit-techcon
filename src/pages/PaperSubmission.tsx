import MotionSection from '../components/MotionSection'

const tracks = [
  {
    title: 'Microelectronics & Integrated Circuits',
    description: 'Research on advanced microelectronic devices, integrated circuit design, and semiconductor technologies.',
  },
  {
    title: 'Smart Sensors & Actuators',
    description: 'Innovations in sensor technologies, actuator systems, and intelligent sensing applications.',
  },
  {
    title: 'Embedded Systems & IoT',
    description: 'Embedded system design, Internet of Things architectures, and connected device technologies.',
  },
  {
    title: 'Microwave and Antenna for Smart Communication',
    description: 'Microwave engineering, antenna design, and smart communication systems.',
  },
  {
    title: 'Wireless Communication and Signal Processing',
    description: 'Wireless communication protocols, signal processing algorithms, and communication systems.',
  },
  {
    title: 'Sustainable Computing & Green Technologies',
    description: 'Energy-efficient computing, green IT solutions, and sustainable technology practices.',
  },
  {
    title: 'Artificial Intelligence',
    description: 'AI algorithms, machine learning, deep learning, and intelligent systems applications.',
  },
  {
    title: 'Data Science & Cybersecurity',
    description: 'Data analytics, big data technologies, cybersecurity, and information security.',
  },
  {
    title: 'Software Automation',
    description: 'Automated software development, testing, deployment, and DevOps practices.',
  },
  {
    title: 'GSM Cellular Networks & Next-Generation Networks',
    description: 'Cellular network technologies, 5G/6G networks, and next-generation communication infrastructure.',
  },
]

const checkpoints = [
  {
    title: 'Submission format',
    detail:
      'Full-length original research or review papers up to six pages following the IEEE double-column conference template. Overlength manuscripts must include justification and may incur additional page charges.',
  },
  {
    title: 'Submission portal',
    detail:
      'All papers must be uploaded via Microsoft CMT at https://cmt3.research.microsoft.com/MVITTECHCON2026. Authors are responsible for ensuring metadata accuracy and conflict declarations.',
  },
  {
    title: 'Review policy',
    detail:
      'Double-blind peer review managed by the Technical Program Committee. Each paper receives a minimum of three reviews plus a meta-review before the final decision.',
  },
  {
    title: 'Publication',
    detail:
      'Accepted papers will be submitted to IEEE Xplore subject to satisfying scope and quality requirements. Proceedings are indexed with major databases including Scopus.',
  },
]

const PaperSubmission = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Paper Submission</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Submit your work to FESCIS 2026.</h1>
        <p className="mt-5 text-lg text-slate-600">
          We invite original research contributions, visionary case studies, and practice-led insights that align with the three
          flagship tracks. Interdisciplinary submissions that bridge multiple tracks are prioritized for plenary storytelling.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600">
          Need help? Write to <a href="mailto:tpc@sirsmvit.edu" className="font-semibold text-smvit-primary underline">tpc@sirsmvit.edu</a> with the subject line “FESCIS Submission”.
        </div>
      </MotionSection>

      <section className="grid gap-6 rounded-[32px] border border-slate-200 bg-white/80 p-6 md:grid-cols-2 md:p-10">
        {tracks.map((track) => (
          <div key={track.title} className="rounded-3xl border border-slate-200 bg-white/70 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{track.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {checkpoints.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default PaperSubmission

