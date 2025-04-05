import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

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

            <Image src = "/images/icons/menu.png" alt = "hamburger" height = {24} width = {24} id = "hamburger" />
        </div>
    </header>
  )
}

export default Header