import {
  FiLayout,
  FiPackage,
  FiRefreshCw,
  FiZap,
  FiShoppingCart,
  FiTool,
  FiPieChart,
  FiCode,
} from 'react-icons/fi'

const services = [
  {
    icon: FiLayout,
    title: 'Theme Development',
    description: 'Custom Shopify themes and Online Store 2.0 upgrades — built to match your brand and convert visitors into buyers.',
  },
  {
    icon: FiPackage,
    title: 'App Integration',
    description: 'Seamless integration of third-party apps including inventory management, subscriptions, reviews, loyalty programs, and more.',
  },
  {
    icon: FiRefreshCw,
    title: 'Store Migration',
    description: 'Migrate your store to Shopify from WooCommerce, Magento, BigCommerce, or any other platform — with zero data loss.',
  },
  {
    icon: FiZap,
    title: 'Speed Optimization',
    description: 'Faster stores rank higher and convert better. We optimize your Shopify store for Core Web Vitals and page load performance.',
  },
  {
    icon: FiShoppingCart,
    title: 'Checkout Customization',
    description: 'Custom checkout flows, upsells, post-purchase pages, and Shopify Functions to increase average order value.',
  },
  {
    icon: FiTool,
    title: 'Bug Fixes & Support',
    description: 'Fast, reliable fixes for broken layouts, payment issues, app conflicts, and anything else holding your store back.',
  },
  {
    icon: FiPieChart,
    title: 'Conversion Rate Optimization',
    description: 'Product page redesigns, A/B testing, and UX improvements designed to turn more of your traffic into revenue.',
  },
  {
    icon: FiCode,
    title: 'Custom Feature Development',
    description: 'Need something Shopify doesn\'t do out of the box? We build custom features, metafields, and Shopify apps from scratch.',
  },
]

export function ShopifyServices() {
  return (
    <section className="w-full bg-zinc-50 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            What Our Shopify Experts Can Do For You
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            From day-one store builds to complex custom development — our vetted Shopify specialists cover every part of the platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 flex flex-col gap-3 border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#1a5eff' }}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
