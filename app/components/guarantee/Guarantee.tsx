import { HiShieldCheck } from 'react-icons/hi'

interface GuaranteeProps {
  assistantLabel?: string
}

export function Guarantee({ assistantLabel = 'executive assistant' }: GuaranteeProps) {
  return (
    <section className="w-full bg-zinc-50 py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <HiShieldCheck className="text-4xl text-black" />
          <h2 className="text-3xl font-semibold text-black">
            100% Money Back Guarantee
          </h2>
        </div>
        <p className="text-lg text-zinc-800 max-w-2xl mx-auto">
          We&apos;re so confident in our service that we offer a 100% money-back guarantee.
          If you&apos;re not completely satisfied with your {assistantLabel}, we&apos;ll refund
          your money—no questions asked.
        </p>
      </div>
    </section>
  )
}
