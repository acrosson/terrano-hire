import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upwork Virtual Assistant Alternative | Terrano Labs',
  description: 'Skip the Upwork hustle. Get a fully-managed virtual assistant that\'s faster, cheaper, and more reliable. Guaranteed accuracy. Starting at $169/week.'
}

export default function UpworkVirtualAssistantLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
