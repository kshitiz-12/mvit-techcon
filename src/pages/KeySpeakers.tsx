import MotionSection from '../components/MotionSection'

const KeySpeakers = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Key Speakers</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Voices shaping the future of resilient technology.</h1>
        <p className="mt-5 text-lg text-slate-600">
          MVIT-TECHCON curates cross-sector leaders who blend research depth with deployment experience. The 2026 line-up bridges
          public infrastructure, advanced communications, and responsible automation.
        </p>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-smvit-accent">Announcement</p>
        <h3 className="mt-4 font-display text-3xl text-slate-900">Key speakers to be announced.</h3>
        <p className="mt-3 text-slate-600">
          Stay tuned for the official reveal of the keynote roster. We are finalizing collaborations with visionary leaders across academia,
          government, and industry.
        </p>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-slate-200 bg-white/80 p-6">
        <h3 className="text-xl font-semibold text-slate-900">Speaker nominations</h3>
        <p className="mt-3 text-sm text-slate-600">
          Recommend visionary speakers or alumni innovators via <a href="mailto:speakers@sirsmvit.edu" className="font-semibold text-smvit-primary underline">speakers@sirsmvit.edu</a>.
          Please include the proposed topic, short bio, and how the session aligns with the conference themes.
        </p>
      </MotionSection>
    </div>
  )
}

export default KeySpeakers

