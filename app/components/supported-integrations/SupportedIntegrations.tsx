import Image from 'next/image'

const integrations = [
  { name: 'Gmail', src: '/images/integrations/gmail.png' },
  { name: 'Google Docs', src: '/images/integrations/google_docs.png' },
  { name: 'Google Sheets', src: '/images/integrations/google_sheets.png' },
  { name: 'Google Slides', src: '/images/integrations/google_slides.png' },
  { name: 'Microsoft Excel', src: '/images/integrations/microsoft_excel.png' },
  { name: 'Microsoft Outlook', src: '/images/integrations/microsoft_outlook.png' },
  { name: 'Microsoft PowerPoint', src: '/images/integrations/microsoft_powerpoint.png' },
  { name: 'Microsoft Teams', src: '/images/integrations/microsoft_teams.png' },
  { name: 'Microsoft Word', src: '/images/integrations/microsoft_word.png' },
  { name: 'Slack', src: '/images/integrations/slack.png' }
]

interface SupportedIntegrationsProps {
  assistantLabel?: string
}

export function SupportedIntegrations({ assistantLabel = 'EA' }: SupportedIntegrationsProps) {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center mb-4">
          Experts in All the Tools
        </h2>
        <p className="text-lg text-zinc-800 text-center mb-12 max-w-2xl mx-auto">
          Your {assistantLabel} will operate easily with Microsoft or Google office product suite.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center w-full h-14 transition-all"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={56}
                height={56}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
