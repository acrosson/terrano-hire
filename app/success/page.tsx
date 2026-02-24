import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 md:px-16 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-black mb-6">
            You&apos;re Signed Up
          </h1>
          <p className="text-lg text-zinc-800 leading-relaxed mb-6">
            Please check your phone for a welcome text message from us.
          </p>
          <p className="text-lg text-zinc-800 leading-relaxed">
            If you don&apos;t see the message, check your iMessage or Android spam folder.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
