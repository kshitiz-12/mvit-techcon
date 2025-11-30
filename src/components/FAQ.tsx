import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const isOpen = (index: number) => openIndices.has(index)

  return (
    <MotionSection className="mt-12 sm:mt-16 md:mt-24">
      <div className="bg-gradient-to-br from-white via-slate-50/50 to-white p-6 sm:p-8 md:p-12 rounded-2xl border border-slate-200/80 shadow-lg">
        <div className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-smvit-primary/10 mb-4">
            <svg
              className="w-8 h-8 text-smvit-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Find answers to common questions about FESCIS 2026
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-smvit-primary to-smvit-accent rounded-full"></div>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-smvit-primary/40 hover:shadow-lg hover:shadow-smvit-primary/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-smvit-primary focus:ring-offset-2"
                aria-expanded={isOpen(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors ${
                    isOpen(index) 
                      ? 'bg-smvit-primary text-white' 
                      : 'bg-smvit-primary/10 text-smvit-primary group-hover:bg-smvit-primary/20'
                  }`}>
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className={`font-semibold text-slate-900 sm:text-lg leading-relaxed ${
                    isOpen(index) ? 'text-smvit-primary' : ''
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <motion.svg
                  className="h-5 w-5 shrink-0 text-slate-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  animate={{ rotate: isOpen(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              {isOpen(index) && (
                <div className="border-t border-slate-200"></div>
              )}
              <AnimatePresence>
                {isOpen(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      id={`faq-answer-${index}`}
                      className="px-5 pb-4 sm:px-6 sm:pb-5 pt-4 text-slate-600 leading-relaxed"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="ml-11 border-l-2 border-slate-200 pl-4">
                        <p className="text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default FAQ

