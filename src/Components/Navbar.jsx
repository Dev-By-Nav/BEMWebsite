import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-nobg1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`flex justify-between items-center min-w-full mx-auto px-12 text-white py-2 ${
          scrolling ? 'fixed top-0 w-full h-16 bg-bem-primary' : 'bg-black'
        } z-50`}
      >
        <Link to='/'>
          <img src={logo} alt='' className='h-20 w-auto' />
        </Link>
        <ul className={`hidden md:flex font-semibold cursor-pointer text-white text-lg ${nav ? 'hidden' : ''}`}>
          <li className={`p-4 ${scrolling ? 'hover:text-black' : 'hover:text-bem-primary'} font-medium`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`p-4 ${scrolling ? 'hover:text-black' : 'hover:text-bem-primary'} font-medium`}>
            <Link to='/services'>Services</Link>
          </li>
          <li className={`p-4 ${scrolling ? 'hover:text-black' : 'hover:text-bem-primary'} font-medium`}>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className={`p-4 ${scrolling ? 'hover:text-black' : 'hover:text-bem-primary'} font-medium flex-row`}>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer text-bem-primary hover:text-bem-primary mr-4'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={`${
            nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] z-50'
          }`}
        >
          <ul className='p-4 cursor-pointer text-white  font-semibold'>
            <li className='p-4 border-b hover:text-bem-primary border-bem-primary  font-medium'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b hover:text-bem-primary border-bem-primary  font-medium'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='p-4 border-b hover:text-bem-primary border-bem-primary  font-medium'>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li className='p-4 hover:text-white font-medium flex-row'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
