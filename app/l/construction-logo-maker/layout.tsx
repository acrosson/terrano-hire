import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Logo Maker — Build a Professional Logo for Your Business | Terrano',
  description: 'Create a professional construction logo for your building, contracting, or trades business. Get a custom logo crafted by a vetted expert designer — fast, affordable, and built to last.',
}

export default function ConstructionLogoMakerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
