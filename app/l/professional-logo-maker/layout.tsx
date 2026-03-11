import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Logo Maker — Get a Professional Logo Design | Terrano',
  description: 'Get a professional logo designed for your business in minutes. Describe your brand and get a custom, professional-quality logo crafted by a vetted expert designer — fast, affordable, and uniquely yours.',
}

export default function ProfessionalLogoMakerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
