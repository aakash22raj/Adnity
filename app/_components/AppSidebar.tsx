import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react"
// import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Profile",
        url: "#",
        icon: User,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar className="bg-white dark:bg-[#0e0e11] text-gray-900 dark:text-gray-200">
            <SidebarHeader>
                <div className='p-4'>
                    {/* <Image src={'./logo.svg'} alt='logo' width={100} height={100}
                        className='w-full h-full' /> */}
                    <h1 className='text-3xl font-extrabold text-blue-600 text-center tracking-wider'>Adnity</h1>
                    <h2 className='text-sm text-gray-400 text-center'>Build Awesome</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a 
                                    href={item.url} 
                                    key={index} 
                                    className={`p-2 text-lg flex gap-2 items-center rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 
                                    ${path.includes(item.url) ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
                                >
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm'>Copyright @Adnity</h2>
            </SidebarFooter>
        </Sidebar>
    )
}