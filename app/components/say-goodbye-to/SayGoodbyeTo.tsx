'use client'

import { useRef, useEffect } from 'react'

interface SayGoodbyeToProps {
  text: string
}

export function SayGoodbyeTo({ text }: SayGoodbyeToProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      video.muted = true
      video.loop = true
      video.play().catch(() => {
        // Autoplay might be blocked, that's okay
      })
    }
  }, [])

  return (
    <section className="w-full bg-zinc-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <video
              ref={videoRef}
              src="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/woman_waving.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
