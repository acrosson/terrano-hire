import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logo Maker — Make a Professional Logo You\'ll Love | Terrano',
  description: 'Create a professional logo for your brand in minutes. Describe your business and get a custom logo crafted by a vetted expert designer — fast, affordable, and uniquely yours.',
}

export default function LogoMakerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
