'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SayGoodbyeToProps {
  text: string
}

export function SayGoodbyeTo({ text }: SayGoodbyeToProps) {
  const [currentFrame, setCurrentFrame] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev >= 9) {
          return 1
        }
        return prev + 1
      })
    }, 300) // Change frame every 100ms for smooth animation

    return () => clearInterval(interval)
  }, [])

  const frameNumber = currentFrame.toString().padStart(4, '0')
  const imageSrc = `/images/woman-waving/woman_waving_frame_${frameNumber}.jpg`

  return (
    <section className="w-full bg-zinc-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt="Woman waving"
              fill
              className="object-cover"
              unoptimized
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
