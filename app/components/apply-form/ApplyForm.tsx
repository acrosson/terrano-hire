'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

interface Question {
  id: string
  question: string
  options: string[]
}

interface ApplyFormProps {
  questions: Question[]
  serviceType: string
}

export function ApplyForm({ questions, serviceType }: ApplyFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const current = questions[step]
  const isLast = step === questions.length - 1
  const selectedAnswer = answers[current.id]

  function selectOption(option: string) {
    setAnswers(prev => ({ ...prev, [current.id]: option }))
  }

  function handleNext() {
    if (!selectedAnswer) return

    if (isLast) {
      const params = new URLSearchParams()
      questions.forEach(q => {
        if (answers[q.id]) params.set(q.id, answers[q.id])
      })
      // Include last answer in case state hasn't flushed
      params.set(current.id, selectedAnswer)
      params.set('service_type', serviceType)
      router.push(`/schedule?${params.toString()}`)
    } else {
      setStep(s => s + 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-zinc-500 mb-2">
              <span>Step {step + 1} of {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}% complete</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h1 className="text-2xl font-semibold text-black mb-6">
            {current.question}
          </h1>

          {/* Options */}
          <div className="flex flex-col gap-3 mb-8">
            {current.options.map(option => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className={`w-full text-left px-5 py-4 rounded-xl border text-base font-medium transition-colors ${
                  selectedAnswer === option
                    ? 'border-black bg-black text-white'
                    : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Next / Submit */}
          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="w-full py-4 rounded-full bg-black text-white text-base font-medium transition-colors hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isLast ? 'See If I Qualify' : 'Next'}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
