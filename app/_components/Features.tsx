'use client'

import { motion } from 'framer-motion'
import { Rocket, BrainCircuit, Sparkles, BarChart2, ShieldCheck, Cpu, Infinity, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const allFeatures = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Blazing Fast",
    description: "Lightning quick performance with our optimized AI algorithms that deliver results in milliseconds."
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Neural Intelligence",
    description: "Advanced neural networks that learn and adapt to your unique business requirements."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks with intelligent workflows that save you hours each day."
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Real-time Analytics",
    description: "Get actionable insights with beautiful dashboards that update in real-time."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Military-grade Security",
    description: "Enterprise-level security with end-to-end encryption and regular audits."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Powerful Processing",
    description: "Handle massive datasets with our distributed computing architecture."
  },
  {
    icon: <Infinity className="w-8 h-8" />,
    title: "Limitless Scaling",
    description: "Grow without constraints with our auto-scaling infrastructure."
  }
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState(3)
  
  const showMoreFeatures = () => {
    setVisibleFeatures(prev => Math.min(prev + 3, allFeatures.length))
  }

  const featuresToShow = allFeatures.slice(0, visibleFeatures)



  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-400/5" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />
        <div className="absolute top-[-300px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 opacity-20 dark:opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-20 dark:opacity-10 rounded-full blur-3xl pointer-events-none" />
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
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our AI-powered platform can transform your workflow with these cutting-edge capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuresToShow.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300 mr-4">
                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleFeatures < allFeatures.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button
              onClick={showMoreFeatures}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Show More Features
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}