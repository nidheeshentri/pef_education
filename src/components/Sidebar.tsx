import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname()
  const navLinks = [
    {title: "Programs", link: "/programs"},
    {title: "Destination", link: "/destination"},
    {title: "Services", link: "/#services"},
    {title: "About us", link: "/#about-us"},
  ]

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        {/* <Link href="/" onClick={onClose}>
          <Image src="/images/Logo.svg" alt="logo" height={40} width={151}/>
        </Link> */}
        <button className="close-btn" onClick={onClose}>
          <Image className='rotate-45' src="/images/icons/plus.png" alt="close" height={24} width={24} />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link} onClick={onClose} className={pathname === item.link?"active-link":""}>{item.title}</Link>
            </li>
          ))}
          <li>
            <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'>Contact</Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'><button>
            Register Now
          </button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar 