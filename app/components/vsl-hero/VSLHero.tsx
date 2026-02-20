'use client'

import Image from 'next/image'
import posthog from 'posthog-js'
import { Button } from '../button/Button'
import { HiPlay } from 'react-icons/hi'
import { VideoPlayer } from '../video-player/VideoPlayer'

interface VSLHeroProps {
  preheading?: string
  heading: string
  postHeading?: string
  videoUrl?: string
  ctaText?: string
  ctaHref?: string
}

export function VSLHero({
  preheading,
  heading,
  postHeading,
  videoUrl,
  ctaText = 'Get Started',
  ctaHref = '#pricing'
}: VSLHeroProps) {
  function handleCtaClick() {
    if (typeof window !== 'undefined') {
      posthog.capture('web_hero_cta_clicked', {
        cta_text: ctaText,
        cta_href: ctaHref
      })
    }
  }

  return (
    <section className="w-full bg-white pt-8 pb-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <Image
            src="/images/review_rating.png"
            alt="Review rating"
            width={220}
            height={48}
            className="mx-auto"
            unoptimized
          />
        </div>
        {preheading && (
          <p className="text-base font-medium text-zinc-600 uppercase tracking-wide mb-2">
            {preheading}
          </p>
        )}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl mb-4">
          {heading}
        </h1>
        {postHeading && (
          <p className="text-lg leading-8 text-zinc-800 max-w-2xl mb-8">
            {postHeading}
          </p>
        )}
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
      </div>
    </section>
  )
}
