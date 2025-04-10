import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer-min.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image
              src="/images/Logo.svg"
              alt="PEF Education Logo"
              width={212}
              height={56}
            />
          </div>
          
          <div className="footer-navigation">
            <div className="footer-column">
              <h3>Programs</h3>
              <ul>
                <li>Undergraduate</li>
                <li>Postgraduate</li>
                <li>Exchange</li>
                <li>Language</li>
                <li>Foundation</li>
                <li>Diploma</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Destination</h3>
              <ul>
                <li>Canada</li>
                <li>UK</li>
                <li>Australia</li>
                <li>New Zealand</li>
                <li>USA</li>
                <li>Europe</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li><Link href="/#about-us">About us</Link></li>
                <li className="address">
                  123 Fashion Street,<br />
                  Downtown Avenue, Mumbai,<br />
                  India , 400001
                </li>
                <li className="email">Lorem@gmail.com</li>
                <li>Support & FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="social-icons">
            <Link href="https://twitter.com" aria-label="Twitter">
              <span className="twitter-icon">𝕏</span>
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <span className="facebook-icon">f</span>
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <span className="instagram-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#666"/>
                </svg>
              </span>
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <span className="youtube-icon">
                <svg width="16" height="12" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 3.5c-.276-1.01-.799-1.804-1.57-2.577-.772-.772-1.567-1.299-2.577-1.57C17.661-.924 12 .216 12 .216s-5.662-1.14-7.351.137c-1.01.276-1.805.799-2.577 1.57C1.3 2.696.777 3.49.496 4.5-.134 6.189.222 11.5.222 11.5s-.356 5.311.274 7c.276 1.01.799 1.804 1.57 2.577.773.772 1.568 1.299 2.577 1.57 1.69.647 7.351.137 7.351.137s5.662.51 7.351-.137c1.01-.276 1.805-.798 2.577-1.57.772-.773 1.294-1.567 1.57-2.577.647-1.689.137-7 .137-7s.51-5.311-.137-7zm-13.85 11.482V4.517L16.84 9.75l-7.193 5.232z" fill="#666"/>
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="copyright">
            © 2025 Lorem All rights reserved
          </div>
          
          <div className="copyright">
          Powered by <Link href = "https://www.marketlube.in/" target = "_blank" style = {{textDecoration: "underline", color: "unset"}}>Marketlube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 