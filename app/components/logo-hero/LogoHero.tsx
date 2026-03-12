'use client'

import { Input, Button } from '@heroui/react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { TypeAnimation } from 'react-type-animation'

interface LogoHeroProps {
  heading?: string
  subheading?: string
  sequences?: (string | number)[]
  backgroundImage?: string
}

export function LogoHero({
  heading = 'Logo Maker — Create a Professional Logo <u>You\'ll Love</u>.',
  subheading = 'Make a logo for your brand in minutes. Describe your business and our expert designers will craft something you\'ll be proud to put on everything.',
  sequences,
  backgroundImage = '/images/hero_two_people_working.jpg',
}: LogoHeroProps) {
  const [businessName, setBusinessName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setError(null)

    if (businessName.trim().length < 2) {
      setError('Please enter your brand or business name to continue.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/task-drafts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName.trim(),
          service_slug: 'design_creative_logo_design',
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json?.detail || json?.message || json?.error || 'Request failed')
      }

      const taskDraftId = json.data.task_draft_id

      const forwardedParams = new URLSearchParams(searchParams.toString())
      forwardedParams.set('task_draft_id', taskDraftId)

      window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?${forwardedParams.toString()}`
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full flex justify-center px-4 pt-0 pb-12">
      <div className="relative w-full max-w-6xl min-h-[480px] flex items-center overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-white"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
            {subheading}
          </p>

          <div className="text-2xl sm:text-3xl font-medium text-white/90 h-10">
            <TypeAnimation
              sequence={sequences ?? [
                'Modern Minimalist Logo',
                2000,
                'Bold Wordmark Logo',
                2000,
                'Monogram Logo',
                2000,
                'Icon + Text Logo',
                2000,
                'Mascot Logo',
                2000,
                'Vintage Badge Logo',
                2000,
                'Abstract Mark Logo',
                2000,
                'Lettermark Logo',
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
            {error && (
              <p className="text-sm text-white bg-red-600 rounded-lg px-4 py-2 text-center">
                {error}
              </p>
            )}
            <Input
              value={businessName}
              onValueChange={setBusinessName}
              placeholder="What is the name of your Brand/Business?"
              size="lg"
              variant="flat"
              classNames={{
                base: 'w-full',
                inputWrapper: 'bg-white/95 shadow-lg rounded-xl px-4 h-14',
                input: 'text-zinc-900 text-base placeholder:text-zinc-400',
              }}
              aria-label="Brand or business name"
            />
            <p className="text-sm text-white/80 text-center">
              🎁 Get $20 in credits when you start your first task today
            </p>
            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={loading}
              className="w-full font-semibold text-base"
            >
              Get My Logo
            </Button>
          </form>

          <p className="text-sm text-white/60">
            No contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
