'use client'

import { FiCheckCircle } from 'react-icons/fi'

const includes = [
  'Wasted spend analysis',
  'Keyword gap report',
  'Competitor ad review',
  'Landing page score',
  'Estimated cost per lead',
  'Quick-win recommendations',
]

export function PlumberFreeAuditCta() {
  function handleClaim() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      const textarea = document.getElementById('hero-task-input') as HTMLTextAreaElement | null
      textarea?.focus()
    }, 600)
  }

  return (
    <section
      className="w-full relative overflow-hidden py-28 px-4"
      style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #071220 100%)' }}
    >
      {/* Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(56,189,248,0.1) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold w-fit"
            style={{
              background: 'linear-gradient(90deg, rgba(56,189,248,0.12), rgba(52,211,153,0.12))',
              border: '1px solid rgba(56,189,248,0.25)',
              color: '#38bdf8',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
            Free — No Strings Attached
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
            Get a Free{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Google Ads Audit
            </span>{' '}
            for Your Plumbing Business
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
            In 30 minutes, we&apos;ll show you exactly where your ad budget is going, what your competitors are bidding on, and how much you could save. Whether you work with us or not.
          </p>

          <button
            onClick={handleClaim}
            className="w-fit inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #0ea5e9, #10b981)' }}
          >
            Claim Your Free Audit →
          </button>

          <p className="text-sm" style={{ color: '#64748b' }}>
            No credit card. No commitment. We&apos;ll send you the audit even if you don&apos;t move forward.
          </p>
        </div>

        {/* Right — what's included card */}
        <div
          className="rounded-2xl p-8 flex flex-col gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: '#38bdf8' }}>
            Your audit includes
          </p>
          <ul className="flex flex-col gap-3">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FiCheckCircle size={18} style={{ color: '#34d399' }} className="shrink-0" />
                <span className="text-sm text-white">{item}</span>
              </li>
            ))}
          </ul>
          <div
            className="mt-2 pt-5 flex flex-col gap-1"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs" style={{ color: '#64748b' }}>Valued at</p>
            <p className="text-3xl font-bold text-white">
              Free{' '}
              <span className="text-lg font-normal line-through" style={{ color: '#475569' }}>
                $750
              </span>
            </p>
            <p
              className="text-sm font-semibold"
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Free for plumbing businesses this month
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
