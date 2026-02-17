'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoPlayerProps {
  url: string
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isMP4 = url.endsWith('.mp4') || url.includes('.mp4?')

  useEffect(() => {
    if (isMP4 && videoRef.current && !audioEnabled) {
      const video = videoRef.current
      
      // Autoplay first 10 seconds muted in a loop
      video.muted = true
      video.play().catch(() => {
        // Autoplay might be blocked, that's okay
      })

      const handleTimeUpdate = () => {
        // Continuously loop the first 10 seconds
        if (video.currentTime >= 10) {
          video.currentTime = 0
        }
      }

      video.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [isMP4, audioEnabled])

  function handleVideoClick() {
    if (!audioEnabled) {
      // First tap: enable audio and play from beginning
      if (videoRef.current) {
        videoRef.current.muted = false
        videoRef.current.currentTime = 0
        videoRef.current.play()
        setAudioEnabled(true)
        setShowOverlay(false)
        setIsPlaying(true)
      }
    } else {
      // Subsequent taps: toggle play/pause
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }
    }
  }

  if (isMP4) {
    return (
      <div className="w-full aspect-video bg-zinc-100 rounded-lg overflow-hidden relative">
        <div
          className="absolute top-0 left-0 right-0 z-10 px-4 py-2"
          style={{ backgroundColor: '#1a5eff', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
        >
          <p className="text-white text-sm font-medium text-center">
            🔊 WATCH THIS FIRST (TURN AUDIO ON)
          </p>
        </div>
        <div className="relative w-full h-full cursor-pointer" onClick={handleVideoClick}>
          <video
            ref={videoRef}
            src={url}
            className="w-full h-full object-contain"
            preload="auto"
            loop={audioEnabled}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
          {showOverlay && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white text-xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-auto">
                Tap for Sound 🔉
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full aspect-video bg-zinc-100 rounded-lg overflow-hidden relative">
      <div
        className="absolute top-0 left-0 right-0 z-10 px-4 py-2"
        style={{ backgroundColor: '#1a5eff', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
      >
        <p className="text-white text-sm font-medium text-center">
          🔊 WATCH THIS FIRST (TURN AUDIO ON)
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        {/* @ts-ignore - react-player types issue with dynamic import */}
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          playing={false}
        />
      </div>
    </div>
  )
}
