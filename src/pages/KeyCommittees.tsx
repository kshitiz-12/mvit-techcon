import MotionSection from '../components/MotionSection'

const committees = [
  {
    title: 'General Chair',
    people: [
      { name: 'Dr. M. N. Thippeswamy', role: 'Principal, Sir MVIT' },
    ],
  },
  {
    title: 'General Co-Chair',
    people: [
      { name: 'Dr. Bharathi Ganesh', role: 'Vice Principal, Sir MVIT' },
    ],
  },
  {
    title: 'Organizing Chair',
    people: [
      { name: 'Dr. Sasmita Mohapatra', role: 'Professor and Head, Dept. of ECE, Sir MVIT' },
      { name: 'Dr. Abhishek Appaji M.', role: 'Chair, IEEE SPS, Bangalore Chapter' },
    ],
  },
  {
    title: 'Organizing Co-Chair',
    people: [
      { name: 'Dr. Seema S.', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
      { name: 'Ms. Shilpa Chippalakatti', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'TPC Chair',
    people: [
      { name: 'Dr. Sheetal Belaldavar', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'TPC Co-Chair',
    people: [
      { name: 'Dr. S. Ambareesh', role: 'Professor, Dept. of AI&ML, Sir MVIT' },
    ],
  },
  {
    title: 'Publication Chair',
    people: [
      { name: 'Mr. Phanindar Ravi P.', role: 'Assistant Professor, Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Publication Co-Chair',
    people: [
      { name: 'Ms. Bhuvaneshwari N.', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Finance Chair',
    people: [
      { name: 'Dr. Poongothai C.', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Finance Co-Chair',
    people: [
      { name: 'Dr. Cyril Robinson Azariah J', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Publicity Chair',
    people: [
      { name: 'Dr. G. Shashibhushan', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Publicity Co-Chair',
    people: [
      { name: 'Dr. Sowndeswari S.', role: 'Associate Professor Dept. of ETE, Sir MVIT' },
    ],
  },
  {
    title: 'Website Chair',
    people: [
      { name: 'Dr. Ch. Vanipriya', role: 'Professor and Head, Dept. of MCA, Sir MVIT' },
    ],
  },
  {
    title: 'Website Co-Chair',
    people: [
      { name: 'Dr. Pradeep S Narayanan', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Registration Chair',
    people: [
      { name: 'Dr. Jagadeesh H. S.', role: 'Professor Dept. of ECE, Sir MVIT' },
    ],
  },
  {
    title: 'Registration Co-Chair',
    people: [
      { name: 'Mr. Nataraja R.', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
    ],
  },
]

const advisoryCommittee = [
  'Prof. L. M. Patnaik, INSA Senior Scientist & Adjunct Faculty, Consciousness Studies Program, National Institute of Advanced Studies, IISc Campus, Honorary Professor, Indian Institute of Science, Bangalore',
  'Dr. Sanjay, Dean of Engineering, Visvesvaraya Technological University, Principal, BMS Institute of Technology & Management',
  'Dr. Abhishek Appaji M., Chair, IEEE SPS, Bangalore Chapter',
  'Dr. Prasant Misra, Chair-IEEE, Bengaluru, Karnataka, India',
  'Prof. Bheemarjun Reddy Tamma, Professor, Dept. of Computer Science and Engineering, Indian Institute of Technology, Hyderabad',
  'Dr. Narushan Pillay, Professor, Dept. of Electrical, Electronics and Computer Engineering, University of Kwazulu-Natal, Duban, South Africa',
  'Dr. Puneet Mishra, Head Antenna Division, U R Rao Satellite Centre, Bengaluru',
  'Dr. Jawed Qumar, Scientist F, Centre for Airborne Systems, Defence Research and Development Organisation, Bengaluru',
  'Dr. Chengappa Munjandira, Senior Technologist, Hewlett Packard Enterprise',
  'Narayanan Selvam, Senior Director, Oracle',
  'Dr. Karunakar Rai, Senate member, Professor, Department of Electronics and Communication Engineering, Nitte Meenakshi Institute of Technology, Bengaluru',
  'Dr. Minh Tien, Professor & Deputy Head of Department, Mechanical Engineering, University of Danang, University of Technical Education, Vietnam',
  'Dr. Low Foo Wah, Assistant Professor & Head of Programme (MEng Electrical), Department of Electrical and Electronic Engineering, University of Tunku Abdul Rahman, Malaysia',
  'Dr. Barbara Szymanik, Associate Professor, West Pomeranian University of Technology, Poland',
  'Dr. Przemyslaw Lopato, Professor, Department of Theoretical Electrical Engineering and Computer Science, West Pomeranian University of Technology, Poland',
  'Dr. Grzegorz Psuj, Associate Professor, Faculty of Electrical and Computer Engineering, West Pomeranian University of Technology, Szczecin, Poland',
  'Ir. Prof. Dr. Sumathi Sethupathi, Faculty of Engineering and Green Technology (FEGT), Department of Environmental Engineering, Kampar Campus, University Tunku Abdul Rahman, Malaysia',
]

const KeyCommittees = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">Key Committees</p>
        <h1 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl sm:text-4xl">Global expertise steering FESCIS.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:text-lg">
          The organizing framework blends campus leadership with international advisors, ensuring that every technical decision,
          delegate experience, and publication process aligns with IEEE gold standards.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
        {committees.map((committee) => (
          <div key={committee.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-900 xs:text-xl">{committee.title}</h3>
            <ul className="mt-3 space-y-2 xs:mt-4 xs:space-y-3">
              {committee.people.map((person, index) => (
                <li key={index} className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 xs:rounded-2xl xs:px-4 xs:py-3">
                  <p className="text-sm font-semibold text-slate-900 xs:text-base">{person.name}</p>
                  <p className="mt-0.5 text-xs text-slate-600 xs:mt-1 xs:text-sm">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6 md:p-8">
        <h3 className="text-xl font-semibold text-slate-900 xs:text-2xl">Advisory Committee</h3>
        <ul className="mt-4 space-y-2 xs:mt-5 xs:space-y-3 sm:mt-6">
          {advisoryCommittee.map((member, index) => (
            <li key={index} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 xs:gap-3 xs:rounded-2xl xs:px-4 xs:py-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-smvit-primary xs:h-2 xs:w-2"></span>
              <span className="text-xs text-slate-700 xs:text-sm">{member}</span>
            </li>
          ))}
        </ul>
      </MotionSection>
    </div>
  )
}

export default KeyCommittees
