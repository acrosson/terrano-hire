import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC PPC Agency — Google Ads for HVAC Companies | Terrano',
  description: 'HVAC Google Ads specialists who know the industry. Proven account structures, negative keyword lists, and landing pages that turn clicks into booked jobs — all year long. No contracts.',
}

export default function HvacPpcAgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
