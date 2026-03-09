import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumber PPC Agency — Google Ads for Plumbing Companies | Terrano',
  description: 'Google Ads for plumbing companies that actually converts. Proven account structures, extensive negative keyword lists, and landing pages built to turn high-intent searches into booked jobs.',
}

export default function PlumberPpcAgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
