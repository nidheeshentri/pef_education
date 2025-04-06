import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navLinks = [
    {title: "Programs", link: "/programs"},
    {title: "Destination", link: "/destination"},
    {title: "Services", link: "#services"},
    {title: "About us", link: "#about-us"},
  ]

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" height={40} width={151}/>
        </Link>
        <button className="close-btn" onClick={onClose}>
          <Image src="/images/icons/close.png" alt="close" height={24} width={24} />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link} onClick={onClose}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button>Register Now</button>
      </div>
    </div>
  )
}

export default Sidebar 