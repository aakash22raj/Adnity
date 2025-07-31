"use client"

import React, { useState, useEffect } from 'react'
import TheamButton from './TheamButton'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { UserRound } from 'lucide-react'

function Navbar() {
  const { user } = useUser();
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 10) {
              setIsScrolled(true)
          } else {
              setIsScrolled(false)
          }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 dark:border-gray-800/50' 
                : 'bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-900'
        }`}>
            <nav className="relative p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-12" aria-label="Global">
                <div>
                    <div className="flex justify-between items-center w-full">
                        <h1 className='text-2xl sm:text-3xl font-extrabold text-blue-500 text-center tracking-wider'>Adnity</h1>

                        <div className="sm:hidden"><TheamButton /></div>
                    </div>
                </div>

                <div id="navbar-collapse-with-animation" className="hs-collapse hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer gap-5">
                        <TheamButton />

                        {/* Clerk Authentication */}
                        {!user ? <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                            <div className="flex items-center gap-x-2 font-medium text-gray-600 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500">
                                <UserRound className="w-4 h-4"/>
                                Get Started
                            </div>
                            </SignInButton>
                            :
                            <UserButton 
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-8 h-8 hover:ring-1 ring-blue-700",
                                    }
                                }} 
                            />
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar