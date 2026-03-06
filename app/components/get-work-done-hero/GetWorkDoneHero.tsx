'use client'

import { Textarea, Button, addToast } from '@heroui/react'
import { useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'

export function GetWorkDoneHero() {
  const [task, setTask] = useState('')
  const [focused, setFocused] = useState(false)
  const [loading, setLoading] = useState(false)
  const submitRef = useRef<HTMLButtonElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (task.trim().length < 8) {
      addToast({
        title: 'A bit more detail please',
        description: 'Please describe your task in at least 8 characters so we can match you with the right expert.',
        color: 'danger',
      })
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/task-drafts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input_raw: task.trim() }),
      })

      if (!res.ok) throw new Error('Request failed')

      const json = await res.json()
      const taskDraftId = json.data.task_draft_id

      window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?task_draft_id=${taskDraftId}`
    } catch {
      addToast({
        title: 'Something went wrong',
        description: 'We couldn\'t submit your task. Please try again in a moment.',
        color: 'danger',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <style>{`
      @keyframes rainbow-move {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .rainbow-border {
        background: linear-gradient(90deg, #00c6ff, #0072ff, #00c6a0, #00ff87, #0072ff, #00c6ff);
        background-size: 400% 400%;
        animation: rainbow-move 2.5s linear infinite;
      }
    `}</style>
    <section className="w-full flex justify-center px-4 pt-0 pb-12">
      <div className="relative w-full max-w-6xl min-h-[480px] flex items-center overflow-hidden rounded-2xl">
      {/* Background: dark gradient placeholder — replace src with a real image URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero_two_people_working.jpg')`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay so text is readable over any photo */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-white">
          The fastest, most reliable way to <u>Get Work Done</u> from experts.
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
          Access skilled workers ready to help you build and scale — without full-time commitment and without high prices.
        </p>

        <div className="text-2xl sm:text-3xl font-medium text-white/90 h-10">
          <TypeAnimation
            sequence={[
              'Design a Website',
              2000,
              'Set Up My Google Ads',
              2000,
              'Find Me Customers',
              2000,
              'Create a Brochure',
              2000,
              'Generate a Lead List',
              2000,
              'Design a Logo',
              2000,
              'Create a Social Media Post',
              2000,
              'Create a Sales Funnel',
              2000,
              'Create a Sales Email',
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col gap-3 mt-2"
        >
          <div className={`rounded-xl p-[4px] transition-colors duration-300 ${focused ? 'rainbow-border' : 'bg-transparent'}`}>
            <Textarea
              value={task}
              onValueChange={setTask}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  submitRef.current?.click()
                }
              }}
              placeholder="Describe what you need help with..."
              minRows={3}
              maxRows={6}
              size="lg"
              variant="flat"
              classNames={{
                base: 'w-full',
                inputWrapper: 'bg-white/95 shadow-lg rounded-[10px] px-4 py-3',
                input: 'text-zinc-900 text-base placeholder:text-zinc-400',
              }}
              aria-label="Describe the work you need done"
            />
          </div>
          <p className="text-sm text-white/80 text-center">
            🎁 Get $50 in credits when you start your first task today
          </p>
          <Button
            ref={submitRef}
            type="submit"
            color="primary"
            size="lg"
            isLoading={loading}
            className="w-full font-semibold text-base"
          >
            Get It Done
          </Button>
        </form>

        <p className="text-sm text-white/60">
          No contracts. Cancel anytime.
        </p>
      </div>
      </div>
    </section>
    </>
  )
}
