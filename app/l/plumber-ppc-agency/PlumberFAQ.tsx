'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'How quickly will I start getting calls?',
    answer: 'Most clients see their first calls within 3–7 days of launch. Google Ads can start showing your business immediately once campaigns are live. The first 30 days are about gathering data and optimising — by month 2, cost per lead is typically 20–30% lower than at launch.',
  },
  {
    question: 'What ad budget do you recommend for a plumbing business?',
    answer: 'We typically recommend a minimum of $1,500–$2,500/month in ad spend to start seeing consistent lead volume. The right budget depends on your market size and the services you want to focus on — emergency calls and water heater replacement tend to be higher ticket and worth bidding more aggressively on.',
  },
  {
    question: 'Do you work with other plumbers in my area?',
    answer: 'No. We offer geographic exclusivity — we will not take on another plumbing client in your service area while you are a client. Your leads are yours, not split with a competitor.',
  },
  {
    question: 'What makes you different from a general PPC agency?',
    answer: 'Most agencies manage accounts across dozens of industries and apply the same generic playbook everywhere. We focus on home service businesses. We have pre-built negative keyword lists, proven ad copy frameworks, and landing page templates built specifically for plumbers — which means faster results and less wasted spend learning the industry from scratch.',
  },
  {
    question: 'Do I own my ad account and data?',
    answer: 'Absolutely. The Google Ads account is created in your name, you have full admin access, and all your campaign data stays with you. If you ever decide to move on, you take everything. No hostage accounts.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'We ask for a 90-day initial term so we have enough time to optimise properly — PPC takes a few weeks of data to mature. After that, it\'s month-to-month. We keep clients by getting results, not by locking them in.',
  },
  {
    question: 'Do you handle Local Services Ads (LSA) as well as Search Ads?',
    answer: 'Yes. We manage both Google Search Ads and Google Local Services Ads. LSAs show above regular search results and carry the "Google Guaranteed" badge, which significantly boosts trust and click-through rates for emergency plumbing searches.',
  },
]

export function PlumberFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-zinc-50 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-zinc-400">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-zinc-900">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-zinc-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-zinc-900">{faq.question}</span>
                  <FiChevronDown
                    size={18}
                    className="shrink-0 text-zinc-400 transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
