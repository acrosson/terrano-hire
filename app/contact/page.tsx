import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-16 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-black mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-800 leading-relaxed mb-4">
            We'd love to hear from you. If you have any questions, concerns, or feedback, please don't hesitate to reach out.
          </p>
          <p className="text-lg text-zinc-800 leading-relaxed">
            You can email us at{' '}
            <a
              href="mailto:support@terrano.ai"
              className="text-blue-600 hover:underline font-medium"
            >
              support@terrano.ai
            </a>
            {' '}and we'll get back to you as soon as possible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
