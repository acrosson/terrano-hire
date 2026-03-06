'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'

export function HeroUIClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  )
}
