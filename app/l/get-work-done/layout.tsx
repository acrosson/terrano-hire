import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Work Done Fast | Terrano Labs',
  description: 'The fastest, most reliable way to get work done from experts. Access skilled workers ready to help you build and scale — without full-time commitment and without high prices.'
}

export default function GetWorkDoneLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
