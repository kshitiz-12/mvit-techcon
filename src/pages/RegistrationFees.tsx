import MotionSection from '../components/MotionSection'

const feeRows = [
  { category: 'Industry', indianIeee: '₹6,400', indianNonIeee: '₹8,000', foreignIeee: '$128', foreignNonIeee: '$160' },
  { category: 'Academician', indianIeee: '₹6,000', indianNonIeee: '₹7,500', foreignIeee: '$120', foreignNonIeee: '$150' },
  { category: 'Research Scholars', indianIeee: '₹5,600', indianNonIeee: '₹7,000', foreignIeee: '$116', foreignNonIeee: '$145' },
  { category: 'Students', indianIeee: '₹5,000', indianNonIeee: '₹6,500', foreignIeee: '$104', foreignNonIeee: '$130' },
  { category: 'Listener', indianIeee: '₹3,000', indianNonIeee: '₹4,000', foreignIeee: '$88', foreignNonIeee: '$110' },
]

const inclusions = [
  'Access to all technical sessions and curated labs',
  'Conference kit, proceedings (digital), and souvenir',
  'Working lunches, refreshment ceremonies, and networking receptions',
  'Hybrid badge with on-demand recordings for 30 days',
]

const registrationNotes = [
  'All fees are inclusive of applicable taxes.',
  'At least one author of an accepted paper must register under the appropriate category.',
  'Registration confirmation along with payment receipt will be emailed within three working days.',
  'For visa invitation letters, forward the payment proof to register@sirsmvit.edu.',
]

const RegistrationFees = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">Registration</p>
        <h1 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl sm:text-4xl">Secure your seat at FESCIS 2026.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:text-lg">
          Registration opens immediately after acceptance notifications. Delegates can opt for the on-campus immersive pass or the
          hybrid pass with live studio feeds. IEEE members receive preferential pricing across all categories.
        </p>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-slate-200 bg-white overflow-hidden xs:rounded-3xl sm:rounded-[32px]">
        <div className="overflow-x-auto -mx-3 xs:-mx-4 sm:-mx-6 md:mx-0">
          <div className="inline-block min-w-full align-middle px-3 xs:px-4 sm:px-6">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs text-slate-700 xs:text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="sticky left-0 z-10 bg-slate-50 px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 shadow-[2px_0_4px_rgba(0,0,0,0.05)] xs:px-4 xs:py-4 xs:text-xs sm:px-6">Category</th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-500 xs:px-3 xs:py-4 xs:text-xs sm:px-6" colSpan={2}>Indian (INR)</th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-500 xs:px-3 xs:py-4 xs:text-xs sm:px-6" colSpan={2}>Foreign (USD)</th>
                </tr>
                <tr>
                  <th className="sticky left-0 z-10 bg-slate-50 px-3 py-2 shadow-[2px_0_4px_rgba(0,0,0,0.05)] xs:px-4 sm:px-6"></th>
                  <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-600 xs:px-3 xs:text-xs sm:px-6">IEEE</th>
                  <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-600 xs:px-3 xs:text-xs sm:px-6">Non-IEEE</th>
                  <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-600 xs:px-3 xs:text-xs sm:px-6">IEEE</th>
                  <th className="px-2 py-2 text-center text-[10px] font-medium text-slate-600 xs:px-3 xs:text-xs sm:px-6">Non-IEEE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {feeRows.map((row) => (
                  <tr key={row.category} className="hover:bg-slate-50/50 transition-colors">
                    <td className="sticky left-0 z-10 bg-white px-3 py-3 font-semibold text-slate-900 shadow-[2px_0_4px_rgba(0,0,0,0.05)] xs:px-4 xs:py-4 sm:px-6 group-hover:bg-slate-50/50">{row.category}</td>
                    <td className="px-2 py-3 text-center whitespace-nowrap xs:px-3 xs:py-4 sm:px-6">{row.indianIeee}</td>
                    <td className="px-2 py-3 text-center whitespace-nowrap xs:px-3 xs:py-4 sm:px-6">{row.indianNonIeee}</td>
                    <td className="px-2 py-3 text-center whitespace-nowrap xs:px-3 xs:py-4 sm:px-6">{row.foreignIeee}</td>
                    <td className="px-2 py-3 text-center whitespace-nowrap xs:px-3 xs:py-4 sm:px-6">{row.foreignNonIeee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-3 py-2 text-[10px] text-slate-500 xs:px-4 xs:text-xs sm:px-6 sm:py-3 border-t border-slate-200">
          <p className="flex items-center gap-1.5">
            <svg className="h-3 w-3 shrink-0 xs:h-4 xs:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="leading-tight">Scroll horizontally on mobile to view all columns</span>
          </p>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900 xs:text-xl">Registration includes</h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 xs:mt-4 xs:space-y-3 xs:text-sm">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-smvit-accent xs:mt-1 xs:h-2 xs:w-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900 xs:text-xl">Notes & policies</h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 xs:mt-4 xs:space-y-3 xs:text-sm">
            {registrationNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-smvit-coral xs:mt-1 xs:h-2 xs:w-2" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>
    </div>
  )
}

export default RegistrationFees

