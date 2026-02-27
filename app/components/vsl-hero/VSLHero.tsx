'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import posthog from 'posthog-js'
import { Button } from '../button/Button'
import { VideoPlayer } from '../video-player/VideoPlayer'

interface VSLHeroProps {
  preheading?: string
  heading: string
  postHeading?: string
  altPreheading?: string
  altHeading?: string
  altPostHeading?: string
  videoUrl?: string
  ctaText?: string
  ctaHref?: string
  applyHref?: string
}

export function VSLHero({
  preheading,
  heading,
  postHeading,
  altPreheading,
  altHeading,
  altPostHeading,
  videoUrl,
  ctaText = 'Get Started',
  ctaHref = '#pricing',
  applyHref = '/apply'
}: VSLHeroProps) {
  const [useAltCopy, setUseAltCopy] = useState(false)
  const [showPhotoCTA, setShowPhotoCTA] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && posthog) {
      // Wait for PostHog feature flags to be loaded
      posthog.onFeatureFlags(() => {
        const flagValue = posthog.getFeatureFlag('show_alt_hero_copy')
        if (flagValue === 'test') {
          setUseAltCopy(true)
        }

        if (posthog.isFeatureEnabled('show_hero_photo_cta')) {
          setShowPhotoCTA(true)
        }
      })
    }
  }, [])

  const displayPreheading = useAltCopy && altPreheading ? altPreheading : preheading
  const displayHeading = useAltCopy && altHeading ? altHeading : heading
  const displayPostHeading = useAltCopy && altPostHeading ? altPostHeading : postHeading

  function handleCtaClick() {
    if (typeof window !== 'undefined') {
      posthog.capture('web_hero_cta_clicked', {
        cta_text: ctaText,
        cta_href: ctaHref,
        variant: useAltCopy ? 'test' : 'control'
      })
    }
  }

  return (
    <section className="w-full bg-white pt-8 pb-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <a href="#testimonials" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 rounded">
            <Image
              src="/images/review_rating.png"
              alt="Review rating"
              width={220}
              height={48}
              className="mx-auto"
              unoptimized
            />
          </a>
        </div>
        {displayPreheading && (
          <p className="text-base font-medium text-zinc-600 uppercase tracking-wide mb-2">
            {displayPreheading}
          </p>
        )}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl mb-4">
          {displayHeading}
        </h1>
        {displayPostHeading && (
          <p className="text-lg leading-8 text-zinc-800 max-w-2xl mb-8">
            {displayPostHeading}
          </p>
        )}
        {showPhotoCTA ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4 items-center bg-[#e9f1ff] rounded-2xl p-8">
            <div className="flex flex-col items-start text-left gap-4 order-2 md:order-1">
              <h2 className="text-3xl font-semibold leading-tight text-black">
                Want to Try for 1 Week FREE? Apply Today.
              </h2>
              <p className="text-lg text-zinc-600">
                We only accept 5% of applicants. Check if you&apos;re eligible.
              </p>
              <div onClick={handleCtaClick}>
                <Button href={applyHref}>
                  Apply For 1 Week Free Trial
                </Button>
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-zinc-600">Average Rating - 5.0</p>
              </div>
            </div>
            <div className="relative w-full aspect-square order-1 md:order-2">
              <Image
                src="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/woman_looking_sideways.jpg"
                alt="Virtual assistant"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        ) : (
          <>
            {videoUrl && <VideoPlayer url={videoUrl} />}
            <div className="flex flex-col items-center gap-4 mt-4 border border-[#1a5eff] w-full bg-[#e9f1ff] py-4">
              <div onClick={handleCtaClick}>
                <Button href={ctaHref}>
                  {ctaText}
                </Button>
              </div>
              <div className="flex items-center gap-3 text-base font-semibold text-black">
                <span className="inline-flex items-center justify-center w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                <span>Limited spots available this week</span>
              </div>
              <p className="text-base font-semibold text-red-600">
                Only 3 spots remaining
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
