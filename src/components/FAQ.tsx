import { useState } from 'react'
import MotionSection from './MotionSection'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the deadline for paper submission?',
    answer: 'The last date for full paper submission is 1st August 2026. All papers must be submitted via the Microsoft CMT portal before the deadline.',
  },
  {
    question: 'Will the conference papers be published?',
    answer: 'Yes, all accepted papers will be submitted to IEEE Xplore Digital Library subject to satisfying scope and quality requirements. The proceedings will be indexed in Scopus and other major databases.',
  },
  {
    question: 'What is the review process?',
    answer: 'The conference follows a double-blind peer review process managed by the Technical Program Committee. Each paper receives a minimum of three reviews plus a meta-review before the final decision.',
  },
  {
    question: 'What are the registration fees?',
    answer: 'Registration fees vary based on the category (IEEE member, non-member, student). Please visit the Registration Fees page for detailed pricing information.',
  },
  {
    question: 'When will I receive acceptance notification?',
    answer: 'Authors will be notified of paper acceptance decisions on 1st October 2026. Notification emails will be sent to the corresponding author.',
  },
  {
    question: 'Is the conference in-person or virtual?',
    answer: 'FESCIS 2026 is planned as an in-person conference to be held at Sir M. Visvesvaraya Institute of Technology, Bengaluru. Please check the website for any updates.',
  },
  {
    question: 'How can I register for the conference?',
    answer: 'Registration opens after acceptance notifications. Authors must complete registration and payment by 7th October 2026. Detailed registration instructions will be provided upon acceptance.',
  },
  {
    question: 'Will visa support letters be provided?',
    answer: 'Yes, visa support letters will be issued within five working days after author registration is confirmed. Contact the registration desk for assistance.',
  },
  {
    question: 'What topics are covered in the conference?',
    answer: 'The conference covers topics including Future Electronics, Sustainable Computing, Intelligent Systems, AI, IoT, Wireless Communication, Data Science, Cybersecurity, and more. See the Paper Submission page for complete track listings.',
  },
  {
    question: 'Can I present multiple papers?',
    answer: 'Yes, you can submit and present multiple papers. Each paper requires separate registration and payment by at least one author.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <MotionSection className="mt-12 sm:mt-16 md:mt-24">
      <div className="bg-white p-6 sm:p-8 md:p-12">
        <div className="mb-6 text-center sm:mb-10">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-smvit-primary focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-slate-900 sm:text-lg">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-slate-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-slate-600"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default FAQ

