import type { Metadata } from 'next'
import {
  FiTarget, FiTrendingUp, FiSearch, FiMail, FiShare2, FiFilter, FiUsers, FiBarChart2,
  FiFeather, FiMonitor, FiPenTool, FiImage, FiBookOpen, FiLayout, FiVideo, FiLayers,
  FiMapPin,
} from 'react-icons/fi'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export const metadata: Metadata = {
  title: 'About Us | Terrano — Marketing & Design Agency',
  description: 'Terrano is a marketing and design agency helping businesses launch, grow, and stand out. Learn about our services, mission, and team.',
}

const marketingServices = [
  { icon: FiTarget,     title: 'Google & PPC Ads',          description: 'High-ROI paid search campaigns that put your business in front of customers actively looking for you.' },
  { icon: FiTrendingUp, title: 'Facebook & Instagram Ads',   description: 'Scroll-stopping social ad creative and targeting strategies that drive awareness and conversions.' },
  { icon: FiSearch,     title: 'SEO & Content',              description: 'Rank higher and stay there. We build content and technical SEO foundations that compound over time.' },
  { icon: FiMail,       title: 'Email Marketing',            description: 'Campaigns and automations that nurture leads and turn one-time buyers into loyal customers.' },
  { icon: FiShare2,     title: 'Social Media Management',    description: 'Consistent, on-brand content that grows your following and keeps your audience engaged.' },
  { icon: FiFilter,     title: 'Sales Funnels',              description: 'End-to-end funnel strategy and build — from landing page to checkout — optimised to convert.' },
  { icon: FiUsers,      title: 'Lead Generation',            description: 'Targeted outreach and lead magnet systems that fill your pipeline with qualified prospects.' },
  { icon: FiBarChart2,  title: 'Analytics & Reporting',      description: 'Clear dashboards and regular reports so you always know what\'s working and where to double down.' },
]

const designServices = [
  { icon: FiFeather,   title: 'Logo & Brand Identity',      description: 'Distinctive logos and full brand systems that tell your story at a glance and stick in memory.' },
  { icon: FiMonitor,   title: 'Web Design',                 description: 'Fast, beautiful websites designed to convert — built on your preferred platform.' },
  { icon: FiPenTool,   title: 'Graphic Design',             description: 'Everything from ads and banners to custom illustrations — crafted for impact.' },
  { icon: FiImage,     title: 'Social Media Graphics',      description: 'Scroll-stopping visuals sized and styled for every platform your audience lives on.' },
  { icon: FiBookOpen,  title: 'Print & Brochures',          description: 'Professionally designed brochures, flyers, and print collateral that leave a lasting impression.' },
  { icon: FiLayout,    title: 'Presentation Design',        description: 'Pitch decks and slide decks that look as compelling as the ideas inside them.' },
  { icon: FiVideo,     title: 'Video Editing',              description: 'Polished video content — from brand reels to ad creative — edited for engagement.' },
  { icon: FiLayers,    title: 'UI/UX Design',               description: 'Thoughtful interface design and user-experience work that makes digital products a joy to use.' },
]

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div
      className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(52,211,153,0.15))' }}
      >
        <Icon size={20} style={{ color: '#38bdf8' }} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{description}</p>
      </div>
      <div
        className="absolute bottom-0 left-7 h-[2px] w-12 rounded-full"
        style={{ background: 'linear-gradient(90deg, #38bdf8, #34d399)' }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section
          className="w-full relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #071220 100%)' }}
        >
          {/* Background glows */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(56,189,248,0.12) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-4 md:px-16 py-28 md:py-36 flex flex-col items-center text-center gap-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#38bdf8' }}>
              Marketing & Design Agency
            </p>

            <h1 className="text-5xl sm:text-7xl font-bold leading-none tracking-tight text-white">
              We&apos;re{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Terrano.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl max-w-2xl leading-relaxed" style={{ color: '#94a3b8' }}>
              We help businesses launch, grow, and stand out — with expert marketing and design that moves as fast as you do.
            </p>

            {/* Divider accent */}
            <div
              className="w-24 h-[3px] rounded-full mt-4"
              style={{ background: 'linear-gradient(90deg, #38bdf8, #34d399)' }}
              aria-hidden="true"
            />
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="w-full bg-white py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — bold statement */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-5">Our Mission</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-zinc-900">
                Built for businesses that want to move fast{' '}
                <span className="text-zinc-400">and look great doing it.</span>
              </h2>
              <div className="mt-8 h-1 w-16 rounded-full bg-zinc-900" aria-hidden="true" />
            </div>

            {/* Right — paragraphs */}
            <div className="flex flex-col gap-6 pt-2 lg:pt-14">
              <p className="text-lg text-zinc-600 leading-relaxed">
                Terrano was built with a simple belief: great marketing and world-class design shouldn&apos;t be locked behind big agency retainers or unreliable freelancers. Every business — regardless of size — deserves expert work, fast.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Our team is a curated group of vetted marketing strategists, paid media experts, and designers who are obsessed with results. We don&apos;t just make things look good — we make them work.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Whether you&apos;re launching a brand from scratch or scaling a business that&apos;s already in motion, we have the talent, the tools, and the speed to help you win.
              </p>
            </div>
          </div>
        </section>

        {/* ── Marketing & Design Services ── */}
        <div style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #071220 100%)' }}>

          {/* Marketing Services */}
          <section className="w-full py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mb-16">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#38bdf8' }}>
                  Marketing Services
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
                  Grow Your Audience{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    & Revenue
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {marketingServices.map((s) => (
                  <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
          </div>

          {/* Design Services */}
          <section className="w-full py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mb-16">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#34d399' }}>
                  Design Services
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
                  Make Your Brand{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #34d399, #38bdf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Unforgettable
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {designServices.map((s) => (
                  <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* ── Address & Contact ── */}
        <section className="w-full bg-white py-24 px-4">
          <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">Find Us</p>
            <h2 className="text-3xl font-bold text-zinc-900 mt-1">Terrano Labs, Inc.</h2>

            <div className="mt-4 w-full flex flex-col items-center gap-5">
              <div className="flex items-start gap-3">
                <FiMapPin size={18} className="text-zinc-400 mt-0.5 shrink-0" />
                <address className="not-italic text-zinc-600 text-base leading-relaxed text-left">
                  20 Exchange Place<br />
                  New York, NY 10005<br />
                </address>
              </div>

              <div className="h-px w-full bg-zinc-100" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <FiMail size={18} className="text-zinc-400 shrink-0" />
                <a
                  href="mailto:support@terrano.ai"
                  className="text-zinc-700 text-base hover:text-zinc-900 transition-colors font-medium"
                >
                  support@terrano.ai
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
