import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire a Shopify Expert — Vetted, Fast & Affordable | Terrano',
  description: 'Hire a certified Shopify expert for your store. Strategy, custom development, conversion optimization, app setup and more — done right the first time. No contracts. Cancel anytime.',
}

export default function HireShopifyExpertLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
