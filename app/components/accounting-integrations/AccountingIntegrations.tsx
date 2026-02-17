import Image from 'next/image'

interface AccountingIntegrationsProps {
  assistantLabel?: string
}

const accountingSoftware = [
  { name: 'QuickBooks Online', src: '/images/integrations/accounting/quickbooks.png' },
  { name: 'Xero', src: '/images/integrations/accounting/xero.png' },
  { name: 'FreshBooks', src: '/images/integrations/accounting/freshbooks.png' },
  { name: 'Wave', src: '/images/integrations/accounting/wave.png' },
  { name: 'Zoho Books', src: '/images/integrations/accounting/zoho.png', width: 136, height: 56 }
]

export function AccountingIntegrations({ assistantLabel = 'Bookkeeper' }: AccountingIntegrationsProps) {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center mb-4">
          Accounting Software Experts
        </h2>
        <p className="text-lg text-zinc-800 text-center mb-12 max-w-2xl mx-auto">
          Your {assistantLabel} is proficient in all major accounting platforms.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {accountingSoftware.map((software) => (
            <div
              key={software.name}
              className="flex items-center justify-center w-full h-14 transition-all"
            >
              <Image
                src={software.src}
                alt={software.name}
                width={software.width || 56}
                height={software.height || 56}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
