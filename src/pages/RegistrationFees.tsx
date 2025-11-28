import MotionSection from '../components/MotionSection'

const feeRows = [
  { category: 'Industry / Academia', indian: '₹8,500', indianIeee: '₹7,000', foreign: '$250', foreignIeee: '$200' },
  { category: 'Research Scholars / UG / PG', indian: '₹7,500', indianIeee: '₹6,000', foreign: '$220', foreignIeee: '$180' },
  { category: 'Accompanying Person', indian: '₹1,000', indianIeee: '₹500', foreign: '$80', foreignIeee: '$60' },
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
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Registration</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Secure your seat at FESCIS 2026.</h1>
        <p className="mt-5 text-lg text-slate-600">
          Registration opens immediately after acceptance notifications. Delegates can opt for the on-campus immersive pass or the
          hybrid pass with live studio feeds. IEEE members receive preferential pricing across all categories.
        </p>
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Indian Delegates</th>
                <th className="px-6 py-4">Indian IEEE Members</th>
                <th className="px-6 py-4">Foreign Delegates</th>
                <th className="px-6 py-4">Foreign IEEE Members</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {feeRows.map((row) => (
                <tr key={row.category}>
                  <td className="px-6 py-4 font-semibold text-slate-900">{row.category}</td>
                  <td className="px-6 py-4">{row.indian}</td>
                  <td className="px-6 py-4">{row.indianIeee}</td>
                  <td className="px-6 py-4">{row.foreign}</td>
                  <td className="px-6 py-4">{row.foreignIeee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Registration includes</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Notes & policies</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {registrationNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-smvit-coral" />
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

