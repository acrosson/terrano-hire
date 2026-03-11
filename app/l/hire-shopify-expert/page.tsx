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
    title: 'Tell Us Your Challenge',
    description: 'Describe what\'s holding your store back — low conversion rates, slow performance, a broken feature, or a growth strategy you need help executing.',
    icon: HiClipboardList,
  },
  {
    number: 2,
    title: 'Get Matched With a Shopify Expert',
    description: 'We match you with a specialist who has hands-on experience with your exact problem — not a generalist who\'ll figure it out on your dime.',
    icon: HiUserGroup,
  },
  {
    number: 3,
    title: 'Expert Delivers, We Oversee',
    description: 'Your U.S.-based account manager ensures quality and accountability throughout. You stay informed without being in the weeds.',
    icon: HiCheckCircle,
  },
  {
    number: 4,
    title: 'Results You Can Measure',
    description: 'Whether it\'s a faster store, a higher conversion rate, or a new revenue stream — we focus on outcomes that move your business forward.',
    icon: HiSparkles,
  },
]

const faqItems = [
  {
    question: 'What\'s the difference between a Shopify expert and a Shopify developer?',
    answer: 'A Shopify developer focuses on building and coding — themes, apps, and custom features. A Shopify expert brings a broader skill set including store strategy, CRO, analytics, UX, and platform knowledge. They know not just how to build things, but what to build to grow your revenue.',
  },
  {
    question: 'What can a Shopify expert help me with?',
    answer: 'Shopify experts can help with store audits, conversion rate optimization, product page improvements, checkout flow fixes, Shopify Markets setup, analytics configuration, theme strategy, app selection, and overall store performance. Think of them as a strategic partner for your store.',
  },
  {
    question: 'How quickly can I get matched with a Shopify expert?',
    answer: 'Most clients are matched within 48 hours. Your dedicated account manager handles sourcing so you skip the time-consuming process of reviewing profiles and conducting interviews.',
  },
  {
    question: 'Are your Shopify experts vetted?',
    answer: 'Yes. Every expert in our network is rigorously screened for platform knowledge, communication skills, and proven results. We only accept the top 1% of applicants — so you\'re getting someone who has genuinely solved these problems before.',
  },
  {
    question: 'Do I have to manage the project myself?',
    answer: 'No. Your dedicated U.S.-based account manager handles all project coordination, keeps your expert accountable, and ensures quality standards are met — so you can focus on running your business.',
  },
  {
    question: 'What if I\'m not happy with the results?',
    answer: 'Your satisfaction is 100% guaranteed. If the output doesn\'t meet your expectations, we\'ll revise it until it does. We stand behind every project we deliver.',
  },
]

export default function HireShopifyExpertPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Shopify Expert Who's <u>Done This Before</u>."
            subheading="You don't need a generalist — you need someone who lives and breathes Shopify. Our vetted experts have solved the exact problems you're facing and will get your store performing at its best."
            sequences={[
              'Audit My Shopify Store',
              2000,
              'Boost My Conversion Rate',
              2000,
              'Set Up Shopify Markets',
              2000,
              'Optimize My Product Pages',
              2000,
              'Fix My Checkout Flow',
              2000,
              'Set Up Shopify Analytics',
              2000,
              'Create a Custom Shopify Theme',
              2000,
              'Improve My Store UX',
              2000,
            ]}
          />
        </Suspense>
        <StatsBanner />
        <TrustedBy />
        <ShopifyServices />
        <HowItWorks steps={howItWorksSteps} title="How Hiring a Shopify Expert Works" />
        <Testimonials showVideos={false} />
        <WhyWereBetter />
        <FAQ items={faqItems} />
        <PromoCta />
      </main>
      <Footer />
    </div>
  )
}
