import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { MarkdownContent } from '../components/markdown-content/MarkdownContent'
import { readFile } from 'fs/promises'
import { join } from 'path'

async function getPrivacyContent() {
  const filePath = join(process.cwd(), 'content', 'privacy.md')
  const content = await readFile(filePath, 'utf-8')
  return content
}

export default async function PrivacyPage() {
  const content = await getPrivacyContent()

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-16 py-16">
        <MarkdownContent content={content} />
      </main>
      <Footer />
    </div>
  )
}
