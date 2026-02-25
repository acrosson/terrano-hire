import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Assistant Services for Businesses | Terrano Labs',
  description: 'Get a Virtual Assistant for your business that works like a 10x operator. Offload your busy work and save money. We\'ll do it fast and accurate, guaranteed. Starting at $169/week.'
}

export default function VirtualAssistantServicesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
