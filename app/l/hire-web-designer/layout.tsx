import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire a Web Designer — Expert, Fast & Affordable | Terrano',
  description: 'Hire a vetted freelance web designer without the hassle. Landing pages, full websites, redesigns and more — delivered fast by top-tier experts. No contracts. Cancel anytime.',
}

export default function HireWebDesignerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
