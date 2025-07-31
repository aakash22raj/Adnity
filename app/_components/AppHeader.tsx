import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
// import { Moon, Sun } from 'lucide-react';
// import React, { useEffect, useState } from 'react'
import TheamButton from './TheamButton';


function AppHeader() {

    return (
        <div className='p-4 shadow-sm flex items-center justify-between w-full bg-white dark:bg-gray-900 dark:text-white'>
            <SidebarTrigger />

            <div className='mr-5 flex items-center gap-6'>
                {/* Apply Dark/light theam on dashboard */}
                <TheamButton />

                <UserButton 
                    appearance={{
                        elements: {
                          userButtonAvatarBox: "w-8 h-8 hover:ring-1 ring-blue-700",
                        }
                    }} 
                />
            </div>

        </div>
    )
}

export default AppHeader