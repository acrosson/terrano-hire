import { Button } from '../button/Button'
import { HiPlay } from 'react-icons/hi'

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
  ctaText = 'Schedule Call',
  ctaHref = 'https://cal.com/crosson/30min'
}: VSLHeroProps) {
  return (
    <section className="w-full bg-white py-16 px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {preheading && (
          <p className="text-base font-medium text-zinc-600 uppercase tracking-wide">
            {preheading}
          </p>
        )}
        <div className="flex flex-col items-center gap-4">
          <HiPlay className="text-5xl text-black" />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
            {heading}
          </h1>
        </div>
        {postHeading && (
          <p className="text-lg leading-8 text-zinc-800 max-w-2xl">
            {postHeading}
          </p>
        )}
        {videoUrl && (
          <div className="w-full aspect-video bg-zinc-100 rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            />
          </div>
        )}
        <div className="flex flex-col items-center gap-4">
          <Button href={ctaHref}>
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}
