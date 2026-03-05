import Image from 'next/image'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero image with text overlay */}
        <div className="w-full flex justify-center px-4 pt-0 pb-12">
          <div className="relative w-full max-w-6xl h-72 sm:h-96 overflow-hidden rounded-2xl">
            <Image
              src="/images/man_asking_question.jpg"
              alt="Man asking a question"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1 className="text-3xl sm:text-5xl font-bold text-white text-center leading-tight tracking-tight drop-shadow-lg">
                Got Questions? We&apos;re Here to Help.
              </h1>
            </div>
          </div>
        </div>

        {/* Contact content */}
        <div className="w-full max-w-xl mx-auto px-4 pb-24 flex flex-col items-center text-center gap-5">
          <p className="text-zinc-500 text-lg leading-relaxed">
            We&apos;d love to hear from you. Whether you have a question, need help getting started, or just want to say hello — we&apos;re always happy to chat.
          </p>
          <a
            href="mailto:support@terrano.ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            support@terrano.ai
          </a>
          <p className="text-sm text-zinc-400">We typically respond within a few hours.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
