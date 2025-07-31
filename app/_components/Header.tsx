'use client'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Button } from '@/components/ui/button'
import heroImage from '@/public/city2.jpg'
import Link from 'next/link'
import { useEffect } from 'react'
import { Code, Cpu, Sparkles, BrainCircuit } from 'lucide-react'

export default function Header() {
  // Animated values for floating elements
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  useEffect(() => {
    const animateFloat = () => {
      animate(x, [0, 10, -5, 8, 0], {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      })
      animate(y, [0, 15, -10, 5, 0], {
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      })
    }
    animateFloat()
  }, [x, y])

  return (
    <section className="relative w-full overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Background Gradient Effects */}
      <div className="absolute top-[40px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-20 dark:opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 opacity-20 dark:opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#00000010_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#FFFFFF05_100%)]"></div>
      </div>

      {/* Floating Elements (Bottom to Top) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 100 + Math.random() * 500, x: Math.random() * 100, opacity: 0 }}
          animate={{ 
            y: -100 - Math.random() * 300,
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className={`absolute ${[
            'text-blue-500/20',
            'text-purple-500/20',
            'text-pink-500/20',
            'text-cyan-500/20',
          ][i % 4]} text-${Math.floor(24 + Math.random() * 24)}px`}
          style={{
            left: `${5 + Math.random() * 90}%`,
          }}
        >
          {[<BrainCircuit key="brain" />, <Cpu key="cpu" />, <Sparkles key="sparkles" />][i % 3]}
        </motion.div>
      ))}

      {/* Floating AI Icons */}
      <motion.div 
        style={{ x, y, rotateX, rotateY }}
        className="absolute top-1/4 left-1/5 text-blue-500/30 dark:text-blue-400/20"
      >
        <BrainCircuit size={48} className="animate-pulse" />
      </motion.div>

      <motion.div 
        style={{ x: useTransform(x, v => -v * 1.5), y: useTransform(y, v => v * 0.8) }}
        className="absolute bottom-1/3 right-1/4 text-purple-500/30 dark:text-purple-400/20"
      >
        <Sparkles size={48} className="animate-pulse delay-300" />
      </motion.div>

      <motion.div 
        style={{ x: useTransform(x, v => v * 0.8), y: useTransform(y, v => -v * 1.2) }}
        className="absolute top-1/3 right-1/5 text-pink-500/30 dark:text-pink-400/20"
      >
        <Cpu size={48} className="animate-pulse delay-500" />
      </motion.div>

      {/* Glass Morphism Floating Nodes */}
      <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-400/10 backdrop-blur-lg filter blur-md animate-float delay-100"></div>
      <div className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full bg-purple-500/10 dark:bg-purple-400/10 backdrop-blur-lg filter blur-md animate-float delay-300"></div>
      <div className="absolute top-[25%] right-[25%] w-20 h-20 rounded-full bg-pink-500/10 dark:bg-pink-400/10 backdrop-blur-lg filter blur-md animate-float delay-500"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Revolutionize
            </span>{' '}
            <br className="hidden md:block" />
            <motion.span 
              className="relative inline-block"
              animate={{ 
                textShadow: [
                  '0 0 8px rgba(99, 102, 241, 0)',
                  '0 0 8px rgba(99, 102, 241, 0.3)',
                  '0 0 8px rgba(99, 102, 241, 0)'
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Your Marketing
            </motion.span>{' '}
            <br className="hidden md:block" />
            with{' '}
            <span className="relative">
              <span className="relative z-10">AI</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-600/40 dark:to-purple-600/40 rounded-full animate-pulse"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Our <span className="font-semibold text-blue-600 dark:text-blue-400">AI Suite</span> empowers you to automate, personalize, and scale your campaigns <span className="font-medium text-purple-600 dark:text-purple-400">like never before.</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex justify-center lg:justify-start gap-4"
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="relative overflow-hidden text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg group"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Sparkles className="ml-2 h-4 w-4 group-hover:animate-sparkle" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="relative border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:border-blue-600 dark:hover:border-blue-400 group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image with Glass Morphism Effect */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-white/10 backdrop-blur-sm bg-white/20 dark:bg-black/20">
            <Image
              src={heroImage}
              alt="AI Marketing Illustration"
              className="w-full max-w-lg object-cover mix-blend-multiply dark:mix-blend-screen"
              priority
            />
            {/* Glass overlay with animated grid */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5"></div>
            </div>
            {/* Floating AI badge */}
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
              <Cpu className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}