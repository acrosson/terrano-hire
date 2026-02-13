'use client'

import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items?: FAQItem[]
  assistantLabel?: string
}

function getDefaultFAQItems(assistantLabel: string): FAQItem[] {
  return [
    {
      question: 'How quickly can I get started?',
      answer: `You can get started within 24-48 hours after your initial call. We'll match you with a ${assistantLabel} and begin onboarding immediately.`
    },
    {
      question: `What tasks can my ${assistantLabel} handle?`,
      answer: `Your ${assistantLabel} can handle a wide range of administrative tasks including email management, calendar scheduling, travel planning, research, document preparation, and more.`
    },
    {
      question: `How do I communicate with my ${assistantLabel}?`,
      answer: `You can communicate with your ${assistantLabel} through email, Slack, or your preferred communication channel. We adapt to your workflow.`
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with no long-term commitment. We offer a 100% money-back guarantee if you\'re not satisfied.'
    },
    {
      question: `How is this different from hiring a full-time ${assistantLabel}?`,
      answer: `Our ${assistantLabel}s are pre-vetted, trained, and ready to work. You get the same quality of service at 1/5 the cost, with no hiring, training, or management overhead.`
    },
    {
      question: 'Why is the price so cheap?',
      answer: 'We\'ve optimized our operations to eliminate traditional overhead costs. By leveraging technology, remote work, and efficient processes, we can deliver the same quality service at a fraction of the cost. You\'re not paying for office space, benefits, or the inefficiencies of traditional hiring—just the value you receive.'
    }
  ]
}

export function FAQ({ items, assistantLabel = 'EA' }: FAQProps) {
  const faqItems = items || getDefaultFAQItems(assistantLabel)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-16 px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-zinc-50 transition-colors"
              >
                <span className="text-lg font-medium text-black">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <HiChevronUp className="text-xl text-zinc-600" />
                ) : (
                  <HiChevronDown className="text-xl text-zinc-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200">
                  <p className="text-zinc-800 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
