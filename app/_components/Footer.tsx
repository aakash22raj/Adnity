'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200/50 dark:border-gray-800/50">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-400/5" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />
        </div>

        <div className="relative max-w-full mx-auto z-10 px-6 sm:px-12 lg:px-24 pt-14 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Adnity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Revolutionizing marketing with AI-powered solutions for businesses of all sizes.
                  </p>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
                      { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                      { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
                      { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -3 }}
                        className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
    
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Home", href: "#" },
                    { name: "About Us", href: "#" },
                    { name: "Features", href: "#" },
                    { name: "Pricing", href: "#" },
                    { name: "Contact", href: "#" }
                  ].map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
    
              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Resources</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Documentation", href: "#" },
                    { name: "Blog", href: "#" },
                    { name: "Case Studies", href: "#" },
                    { name: "Webinars", href: "#" },
                    { name: "Help Center", href: "#" }
                  ].map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
    
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">123 AI Street, Tech City, TC 10001</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                    <a href="mailto:info@adnity.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      info@adnity.com
                    </a>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                    <a href="tel:+11234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      +1 (123) 456-7890
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-gray-200/50 dark:border-gray-800/50 my-6"
            />
    
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center text-center"
            >
              <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                © {currentYear} Adnity. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </motion.div>
        </div>
    </footer>
  )
}