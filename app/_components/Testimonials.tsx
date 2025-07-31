'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatar: "/man6.jpg",
    content: "This platform transformed our marketing strategy. The AI insights helped us increase conversions by 140% in just three months!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartupX",
    avatar: "/man6.jpg",
    content: "Incredible customer support and powerful features. We scaled from 0 to 10,000 users seamlessly with their infrastructure.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager, DesignHub",
    avatar: "/girl.jpeg",
    content: "The intuitive interface saved our team countless hours. The automation features are game-changers for productivity.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, FinTech Solutions",
    avatar: "/man6.jpg",
    content: "Enterprise-grade security with surprisingly simple implementation. Our compliance team was impressed during the audit.",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    if (!autoRotate) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [autoRotate, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoRotate(false) // Pause auto-rotation on manual navigation
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoRotate(false) // Pause auto-rotation on manual navigation
  }

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-400/5" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />
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
            Trusted by Innovators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from industry leaders who've transformed their businesses with our platform.
          </p>
        </motion.div>

        <div className="relative max-w-full mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0.3,
                  x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100),
                  scale: index === currentIndex ? 1 : 0.95,
                  zIndex: index === currentIndex ? 10 : 1
                }}
                transition={{ duration: 0.6, type: 'spring' }}
                className={`
                  absolute inset-0 p-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md 
                  border-2 border-blue-300/50 dark:border-gray-800/50 shadow-sm
                  flex flex-col items-center text-center
                `}
              >
                {/* Quote icon */}
                <div className="mb-6 text-blue-500/20 dark:text-blue-400/20">
                  <Quote className="w-12 h-12" size={24} />
                </div>

                {/* Rating stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>

                {/* Avatar and info */}
                <div className="mt-auto flex items-center">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-400 dark:border-purple-600 relative z-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold flex items-start text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons at bottom */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-400/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-400/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}