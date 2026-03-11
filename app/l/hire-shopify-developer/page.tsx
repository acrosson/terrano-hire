import { Suspense } from 'react'
import { HiClipboardList, HiUserGroup, HiCheckCircle, HiSparkles } from 'react-icons/hi'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'
import { ShopifyServices } from '../../components/shopify-services/ShopifyServices'
import { StatsBanner } from '../../components/stats-banner/StatsBanner'
import { HowItWorks } from '../../components/how-it-works/HowItWorks'
import { FAQ } from '../../components/faq/FAQ'

const howItWorksSteps = [
  {
    number: 1,
    title: 'Describe Your Project',
    description: 'Tell us what you need — a new store build, a theme fix, an app integration, or something custom. No brief too big or small.',
    icon: HiClipboardList,
  },
  {
    number: 2,
    title: 'Get Matched in 48 Hours',
    description: 'We match you with a vetted Shopify developer whose skills fit your project exactly — not just whoever is available.',
    icon: HiUserGroup,
  },
  {
    number: 3,
    title: 'Review & Approve',
    description: 'Your dedicated account manager oversees quality and keeps the project on track. You approve before anything goes live.',
    icon: HiCheckCircle,
  },
  {
    number: 4,
    title: 'Launch With Confidence',
    description: 'Your store goes live with expert support standing by. If anything needs tweaking, we\'re on it — fast.',
    icon: HiSparkles,
  },
]

const faqItems = [
  {
    question: 'How quickly can I hire a Shopify developer?',
    answer: 'You can be matched with a vetted Shopify developer within 48 hours of submitting your project. Your dedicated account manager handles the matching process so you don\'t have to sift through profiles.',
  },
  {
    question: 'What kinds of Shopify projects can you handle?',
    answer: 'We cover the full range — new store builds, theme customization, Online Store 2.0 upgrades, app integrations, custom feature development, store migrations, speed optimization, checkout customization, and bug fixes.',
  },
  {
    question: 'Are your Shopify developers vetted?',
    answer: 'Yes. Every developer in our network goes through a rigorous screening process covering technical skills, communication, and past work quality. We only work with the top 1% of applicants.',
  },
  {
    question: 'Do I need to manage the developer myself?',
    answer: 'No. Your dedicated U.S.-based account manager handles project management, keeps the developer accountable, and ensures your quality and timeline standards are always met.',
  },
  {
    question: 'What if I\'m not satisfied with the work?',
    answer: 'We stand behind our work 100%. If you\'re not happy with the output, we\'ll make it right — revisions are included and your satisfaction is guaranteed.',
  },
  {
    question: 'How is this different from hiring on Upwork or Fiverr?',
    answer: 'On freelance marketplaces, you\'re on your own — vetting developers, managing quality, and chasing deadlines. We handle all of that for you. You get expert-level output with a dedicated account manager ensuring everything runs smoothly.',
  },
]

export default function HireShopifyDeveloperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Shopify Developer Who <u>Knows What They're Doing</u>."
            subheading="Stop wasting time on developers who overpromise and underdeliver. Our vetted Shopify experts build, fix, and scale your store — fast, on budget, and without the back-and-forth."
            sequences={[
              'Build My Shopify Store',
              2000,
              'Customize My Shopify Theme',
              2000,
              'Integrate a Shopify App',
              2000,
              'Fix My Shopify Store',
              2000,
              'Optimize My Store Speed',
              2000,
              'Set Up My Checkout Flow',
              2000,
              'Migrate to Shopify',
              2000,
              'Build a Custom Shopify Feature',
              2000,
            ]}
          />
        </Suspense>
        <StatsBanner />
        <TrustedBy />
        <ShopifyServices />
        <HowItWorks steps={howItWorksSteps} title="How Hiring a Shopify Developer Works" />
        <Testimonials showVideos={false} />
        <WhyWereBetter />
        <FAQ items={faqItems} />
        <PromoCta />
      </main>
      <Footer />
    </div>
  )
}
