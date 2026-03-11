import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Logo Creator — Generate a Professional Logo with AI | Terrano',
  description: 'Create a stunning logo in minutes with AI-powered design. Describe your brand, pick your style, and get a professional logo crafted by AI and refined by expert designers.',
}

export default function AiLogoCreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
