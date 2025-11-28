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
      { name: 'Dr. Anitha T. N.', role: 'Professor and Head, Dept. of CSE, Sir MVIT' },
    ],
  },
  {
    title: 'TPC Co-Chair',
    people: [
      { name: 'Dr. Sheetal Belaldavar', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
      { name: 'Dr. S. Ambareesh', role: 'Professor Dept. of CSE, Sir MVIT' },
    ],
  },
  {
    title: 'Publication Chair',
    people: [
      { name: 'Dr. Savitha Chowdhary', role: 'Professor and Head, Dept. of IoT, Sir MVIT' },
    ],
  },
  {
    title: 'Publication Co-Chair',
    people: [
      { name: 'Mr. Phanindar Ravi P.', role: 'Assistant Professor, Dept. of ECE, Sir MVIT' },
      { name: 'Dr. Shridar Kumar', role: 'Professor, Dept. of ISE, Sir MVIT' },
    ],
  },
  {
    title: 'Finance Chair',
    people: [
      { name: 'Dr. G. C. Bhanuprakash', role: 'Professor and Head, Dept. of ISE, Sir MVIT' },
    ],
  },
  {
    title: 'Finance Co-Chair',
    people: [
      { name: 'Dr. Poongothai C.', role: 'Associate Professor Dept. of ECE, Sir MVIT' },
      { name: 'Dr. Sreenivasa B. C.', role: 'Associate Professor Dept. of CSE, Sir MVIT' },
    ],
  },
  {
    title: 'Publicity Chair',
    people: [
      { name: 'Dr. E. Kavitha', role: 'Professor and Head, Dept. of ETE, Sir MVIT' },
    ],
  },
  {
    title: 'Publicity Co-Chair',
    people: [
      { name: 'Dr. G. Shashibhushan', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
      { name: 'Dr. Sowndeswari', role: 'Associate Professor Dept. of ETE, Sir MVIT' },
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
      { name: 'Dr. Soumya Patil', role: 'Professor and Head, Dept. of AIML, Sir MVIT' },
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
      { name: 'Ms. Bhuvaneshwari N.', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
      { name: 'Ms. Geetha V.', role: 'Assistant Professor Dept. of ECE, Sir MVIT' },
    ],
  },
]

const advisoryCommittee = [
  'L. M. Patnaik, Professor, Adjunct Professor and NASI Senior Scientist',
  'Dr. Sanjay, Dean of Engg., VTU, Principal BMSIT',
  'Dr. Abhishek Appaji M., Chair, IEEE SPS, Bangalore Chapter, BMSCE – Bengaluru',
  'Dr. Karunakar Rai, AICTE, VTU, Professor, Dept. of ECE, NMIT',
  'Dr. Prasant Misra, Chair-IEEE Bengaluru Karnataka, India',
  'Prof. Bheemarjun Reddy Tamma, Dept. of Computer Science and Engineering, IIT Hyderabad',
  'Dr. Narushan Pillay, Dept. of Electrical, Electronics and Computer Engineering, University of Kwazulu-Natal Duban',
  'Dr. Puneet Mishra, Head Antenna Division URSC, Bangalore',
  'Dr. Jawed Qumar, Scientist F CABS, DRDO, Bengaluru',
  'Oracle',
  'SAP',
  'IBM',
]

const KeyCommittees = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Key Committees</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Global expertise steering FESCIS.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The organizing framework blends campus leadership with international advisors, ensuring that every technical decision,
          delegate experience, and publication process aligns with IEEE gold standards.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-2">
        {committees.map((committee) => (
          <div key={committee.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-xl font-semibold text-slate-900">{committee.title}</h3>
            <ul className="mt-4 space-y-3">
              {committee.people.map((person, index) => (
                <li key={index} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
                  <p className="font-semibold text-slate-900">{person.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">Advisory Committee</h3>
        <ul className="mt-6 space-y-3">
          {advisoryCommittee.map((member, index) => (
            <li key={index} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-smvit-primary"></span>
              <span className="text-slate-700">{member}</span>
            </li>
          ))}
        </ul>
      </MotionSection>
    </div>
  )
}

export default KeyCommittees
