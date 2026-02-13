import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Button } from './components/button/Button'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center justify-center py-32 px-16 bg-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black sm:text-4xl">
            Hire Skilled Workers. Offload your Busy Work. Save Money.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-800">
            Give us the work you don't want to do. We'll do it fast and accurate guaranteed.
          </p>
          <Button href="https://cal.com/crosson/30min">
            Schedule Call
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
