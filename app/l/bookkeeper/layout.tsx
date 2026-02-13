import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookkeeper Service | Terrano Labs',
  description: 'Get a Bookkeeper that works like a 10x operator. Offload your busy work and save money. We\'ll do it fast and accurate, guaranteed. Starting at $169/week.'
}

export default function BookkeeperLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
