"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Header = () => {
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
        {title: "Services", link: "#services"},
        {title: "About us", link: "#about-us"},
        // {title: "Contact", link: ""},
    ]

  return (
    <header>
        <div className = "container navbar">
            <Link href = "/">
                <Image src = "/images/logo.png" alt = "logo" height={40} width={151}/>
            </Link>

            <nav>
                <ul>
                    {navLinks.map((item, index) => (
                        <li key = {index}>
                            <Link href = {item.link} >{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button>Register Now</button>

            <Image 
                src = "/images/icons/menu.png" 
                alt = "hamburger" 
                height = {24} 
                width = {24} 
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