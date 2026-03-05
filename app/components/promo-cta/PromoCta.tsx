import { Button } from '../button/Button'

interface PromoCtaProps {
  href: string
}

export function PromoCta({ href }: PromoCtaProps) {
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden bg-white">
      {/* Subtle background tint orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)', transform: 'translate(50%, 50%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Promo badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            background: 'linear-gradient(90deg, rgba(56,189,248,0.12), rgba(52,211,153,0.12))',
            border: '1px solid rgba(56,189,248,0.25)',
            color: '#0891b2',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#0891b2' }}
            aria-hidden="true"
          />
          Limited Time Offer
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-zinc-900">
          Join Today and Get{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #0ea5e9, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            $50 Towards
          </span>{' '}
          Your First Task
        </h2>

        <p className="text-lg max-w-xl text-zinc-500">
          Start your first task on us. No contracts, no risk — just results. Sign up today and we&apos;ll apply $50 credit to your account instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Button href={href} variant="blue">
            Claim Your $50 Credit
          </Button>
          <p className="text-sm text-zinc-400">
            No credit card required &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
