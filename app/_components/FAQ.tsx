'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How does the AI technology work?",
    answer: "Our platform uses advanced machine learning algorithms trained on millions of data points to deliver accurate predictions and insights. The system continuously learns and improves from new data."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email support for all plans, with priority phone support for enterprise customers. Our average response time is under 2 hours during business hours."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time through your account settings. Plan changes take effect immediately with pro-rated billing adjustments."
  },
  {
    question: "Is my data secure with your platform?",
    answer: "Absolutely. We use end-to-end encryption, regular security audits, and comply with major data protection regulations including GDPR and CCPA."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are up and running within 24 hours. Our onboarding wizard guides you through setup, and for enterprise plans we offer dedicated implementation specialists."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we provide custom AI solutions tailored to your specific business needs. Contact our sales team to discuss your requirements."
  }
  
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-400/5" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />
      </div>

      <div className="relative max-w-full mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find quick answers to common questions about our platform and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={`
                  p-6 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md
                  border border-gray-200/50 dark:border-gray-800/50 shadow-sm
                  cursor-pointer transition-all duration-200
                  ${expandedIndex === index ? 
                    'shadow-md border-blue-400/30 dark:border-blue-300/20' : 
                    'hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-700/50'
                  }
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 mr-4 rounded-lg bg-blue-100/50 dark:bg-blue-900/30">
                      <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: expandedIndex === index ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pt-4 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Still have questions?
          </p>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}