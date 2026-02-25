import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Virtual Assistant Services | Terrano Labs',
  description: 'Get an online virtual assistant that works like a 10x operator. Offload your busy work and save money. We\'ll do it fast and accurate, guaranteed. Starting at $169/week.'
}

export default function OnlineVirtualAssistantLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
