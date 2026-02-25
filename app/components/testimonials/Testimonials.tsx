'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'

const testimonials = [
  {
    name: 'Kevin Huang',
    company: 'Founder, Technology Startup',
    videoUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/testimonial_video_3.mp4',
    coverUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/testimonial_3_video_cover.jpg',
  },
  {
    name: 'Jenny Crosson',
    company: 'Co-Founder, Golf Cart Manufacturing',
    videoUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/testimonial_video_1.mp4',
    coverUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/testimonial_1_video_cover.jpg',
  },
  {
    name: 'Nick Cherkassky',
    company: 'CEO, Smart Vending Club',
    videoUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/testimonial_video_2.mp4',
    coverUrl: 'https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/testimonial_2_video_cover.jpg',
  },
]

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const posthog = usePostHog()

  function handleVideoOpen(t: typeof testimonials[number]) {
    setActiveVideo(t.videoUrl)
    posthog.capture('web_testimonial_video_started', {
      video_url: t.videoUrl,
      person_name: t.name,
      person_company: t.company,
    })
  }

  return (
    <>
      <section id="testimonials" className="w-full bg-white py-16 px-4 md:px-16 scroll-mt-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Hear What Others Have To Say
          </h2>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-start">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-4 w-full sm:w-64">
                <button
                  onClick={() => handleVideoOpen(t)}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={t.coverUrl}
                    alt={`${t.name} testimonial`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <svg className="w-7 h-7 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-black text-lg">{t.name}</p>
                  <p className="text-zinc-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
            onClick={() => setActiveVideo(null)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-xs mx-4"
            style={{ aspectRatio: '9/16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  )
}
