import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'oDesk Virtual Assistant Alternative | Terrano Labs',
  description: 'Go beyond oDesk. Get a fully-managed virtual assistant that\'s faster, cheaper, and more reliable. Guaranteed accuracy. Starting at $169/week.'
}

export default function ODeskVirtualAssistantLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
