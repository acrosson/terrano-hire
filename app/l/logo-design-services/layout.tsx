import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logo Design Services — Custom Logo Design by Expert Designers | Terrano',
  description: 'Get custom logo design services from vetted expert designers. Describe your brand and receive a unique, high-quality logo tailored to your business — fast, affordable, and professionally crafted.',
}

export default function LogoDesignServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
