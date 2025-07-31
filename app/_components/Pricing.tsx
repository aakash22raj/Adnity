'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Gem, Crown } from 'lucide-react'
import { useState } from 'react'

const pricingTiers = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for individuals getting started",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    features: [
      "Basic analytics dashboard",
      "Up to 3 projects",
      "Email support",
      "1 team member",
      "Limited API access"
    ],
    featured: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing teams and businesses",
    icon: <Gem className="w-6 h-6 text-blue-500" />,
    features: [
      "Advanced analytics",
      "Unlimited projects",
      "Priority email support",
      "Up to 5 team members",
      "Full API access",
      "Custom integrations"
    ],
    featured: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    icon: <Crown className="w-6 h-6 text-purple-500" />,
    features: [
      "Advanced analytics + AI",
      "Unlimited projects & team",
      "24/7 dedicated support",
      "Single sign-on (SSO)",
      "Custom API limits",
      "Enterprise-grade security",
      "Personalized onboarding"
    ],
    featured: false,
    buttonText: "Contact Sales"
  }
]

export default function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)


  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-400/5" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />
        <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-20 dark:opacity-10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Flexible Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Scale up or down as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredTier(index)}
              onHoverEnd={() => setHoveredTier(null)}
              className="relative h-full"
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
                  Most Popular
                </div>
              )}

              <div className={`
                h-full p-8 rounded-2xl border-2 transition-all duration-300
                ${tier.featured ? 
                  'border-blue-500/30 dark:border-blue-400/20 bg-white/60 dark:bg-gray-900/60 shadow-lg' : 
                  'border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 shadow-sm'
                }
                ${hoveredTier === index ? 
                  'scale-[1.02] shadow-md border-blue-400/50 dark:border-blue-300/30' : 
                  ''
                }
                backdrop-blur-md
              `}>
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mr-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{tier.name}</h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-end mb-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                    {tier.period && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                    ${tier.featured ? 
                      'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg' :
                      'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {tier.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}