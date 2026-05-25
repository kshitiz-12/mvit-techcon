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
      'Full-length papers of minimum 6 pages following the IEEE double-column conference template. Overlength manuscripts must include justification and may incur additional page charges.',
  },
  {
    title: 'Submission portal',
    detail:
      'All papers must be uploaded via Microsoft CMT. Authors are responsible for ensuring metadata accuracy and conflict declarations.',
    acknowledgement:
      'Acknowledgement: The Microsoft CMT service is used to manage the peer-review process for this conference. Microsoft provides this service free of charge and covers all related operational expenses, including Azure cloud infrastructure, software development, and technical support.',
    portalPlaceholder: 'https://cmt3.research.microsoft.com/MVITTECHCON2026',
  },
  {
    title: 'Review policy',
    detail: '',
    points: [
      'All submitted manuscripts undergo mandatory plagiarism screening as per IEEE guidelines.',
      'Triple-blind review is used. Authors must remove names, affiliations, acknowledgements, and any identifying information from the manuscript.',
      'Self-citations must be written in the third person to avoid revealing identity.',
      'Papers are evaluated on originality, technical depth, clarity, significance, and relevance to the conference scope.',
      'The author list at the time of submission is final. No reordering, addition or removal of authors is allowed after submission.',
      'Papers violating formatting, page limits, or anonymization rules will be rejected without review.',
    ],
  },
  {
    title: 'Publication',
    detail:
      'All accepted, registered and presented papers will be submitted for possible publication in IEEE Xplore® Digital Library, through the IEEE Conference Publications Program (CPP)',
  },
]

const PaperSubmission = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">Paper Submission</p>
        <h1 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl sm:text-4xl">Submit your work to FESCIS 2026.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:text-lg">
          We invite original research contributions, visionary case studies, and practice-led insights that align with the ten
          flagship tracks. Interdisciplinary submissions that bridge multiple tracks are prioritized for plenary storytelling.
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-3 text-xs leading-relaxed text-slate-600 xs:mt-5 xs:rounded-2xl xs:p-4 xs:text-sm">
          Need help? Write to <a href="mailto:fescis-ieee@sirmvit.edu" className="font-semibold text-smvit-primary underline break-all hover:text-smvit-primaryDark">fescis-ieee@sirmvit.edu</a> with the subject line "FESCIS Submission".
        </div>
      </MotionSection>

      <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 xs:gap-5 xs:rounded-3xl xs:p-5 sm:gap-6 sm:rounded-[32px] sm:p-6 md:grid-cols-2 md:p-10">
        {tracks.map((track) => (
          <div key={track.title} className="rounded-2xl border border-slate-200 bg-white/70 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
            <h3 className="text-base font-semibold text-slate-900 leading-tight break-words xs:text-lg">{track.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 xs:mt-3 xs:text-sm">{track.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
        {checkpoints.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
            <h3 className="text-base font-semibold text-slate-900 leading-tight xs:text-lg">{item.title}</h3>
            {'points' in item && item.points ? (
              <ul className="mt-2 list-disc list-inside space-y-1.5 text-xs leading-relaxed text-slate-600 marker:text-smvit-primary xs:mt-3 xs:text-sm">
                {item.points.map((point) => (
                  <li key={point} className="break-words">{point}</li>
                ))}
              </ul>
            ) : 'portalPlaceholder' in item && item.portalPlaceholder ? (
              <div className="mt-2 space-y-3 xs:mt-3 xs:space-y-4">
                <p className="text-xs leading-relaxed text-slate-600 xs:text-sm">{item.detail}</p>
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/90 p-3 xs:rounded-2xl xs:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 xs:text-xs">Submit via Microsoft CMT</p>
                  <span className="mt-1.5 inline-block rounded-md bg-slate-200/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    Coming soon
                  </span>
                  <p className="mt-2 break-all font-mono text-xs text-slate-400 xs:text-sm">
                    {item.portalPlaceholder}
                  </p>
                  <p className="mt-1.5 text-[10px] text-slate-400 xs:text-xs">Submission portal link will be updated here.</p>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 xs:text-sm">
                  {item.acknowledgement}
                </p>
              </div>
            ) : (
              <p className="mt-2 text-xs leading-relaxed text-slate-600 break-words xs:mt-3 xs:text-sm">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default PaperSubmission

