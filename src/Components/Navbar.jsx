import React, { useState, useEffect } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

import logo from '../assets/logo-nobg1.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`flex items-center justify-between min-w-full mx-auto px-12 text-white py-2 ${scrolling ? 'fixed top-0 w-full h-16 bg-bem-primary' : 'bg-black'} z-50`}>
        <div className="flex items-center">
          <img src={logo} alt='' className='h-20 w-auto' />
        </div>
        <div className="flex items-center">

          {/* Instagram Icon */}
          <a href="https://www.instagram.com/boldedgemedia/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={25} />
          </a>

          {/* TikTok Icon */}
          {/* <a href="your-tiktok-link" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTiktok size={22} />
          </a> */}

          {/* Email Icon */}
          <a href="mailto:info@boldedgemedia.co.uk" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <AiOutlineMail size={25} />
          </a>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
