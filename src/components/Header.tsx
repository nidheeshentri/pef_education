"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'


const Header = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const navLinks = [
        {title: "Programs", link: "/programs"},
        {title: "Destination", link: "/destination"},
        {title: "Services", link: "/#services"},
        {title: "About us", link: "/#about-us"},
        // {title: "Contact", link: ""},
    ]

  return (
    <header>
        <div className = "container navbar">
            <Link href = "/">
                <Image src = "/images/Logo.svg" alt = "logo" height={40} width={151}/>
            </Link>

            <nav>
                <ul>
                    {navLinks.map((item, index) => (
                        <li key = {index}>
                            <Link href = {item.link} className={pathname === item.link?"active-link":""}>{item.title}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'><button>
                Register Now
            </button></Link>

            <Image 
                src = "/images/icons/Menu.svg" 
                alt = "hamburger" 
                height = {50} 
                width = {50} 
                id = "hamburger"
                onClick={toggleSidebar}
                style={{ cursor: 'pointer' }}
            />
        </div>
        
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  )
}

export default Header