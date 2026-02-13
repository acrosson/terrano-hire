import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Administrator Service | Terrano Labs',
  description: 'Get an Office Administrator that works like a 10x operator. Offload your busy work and save money. We\'ll do it fast and accurate, guaranteed. Starting at $169/week.'
}

export default function OfficeAdministratorLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
