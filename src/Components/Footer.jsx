import React from 'react';
import { FaInstagram, FaYoutube, FaGoogle   } from 'react-icons/fa';
import logo from '../assets/logo-nobg.png'
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
        <hr style={{ border: '1px solid #d6c6b9', margin: '0 0' }} />
        
      <div className="flex flex-col md:flex-row items-center px-12">

        {/* First Section: Logo */}
        <div className='w-1/3'>
          <img src={logo} alt="Company Logo" className=" h-32 w-32" />
        </div>

        {/* Second Section: Info */}
        <div className='w-1/3 m-4'>
          {/* <p>Email: info@boldedgemedia.co.uk</p> */}
          {/* Add more info as needed */}
        </div>

        {/* Third Section: Instagram Icon */}
        <div className='w-1/3 m-4 flex flex-row item-center justify-center mx-auto pb-10'>
          <a href="https://www.instagram.com/boldedgemedia/" target="_blank" rel="noopener noreferrer" className='mx-2'>
            <FaInstagram size='30px'  />
          </a>


          <a href="mailto:info@boldedgemedia.co.uk" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <AiOutlineMail size='32px' />
          </a>

          <a href="https://www.google.com/search?sca_esv=587313471&sxsrf=AM9HkKmSrfb0cgTT2VnmmSH-KesW8sfXrQ%3A1701536031806&q=Bold%20Edge%20Media&stick=H4sIAAAAAAAAAONgU1I1qDCyNDVJTkxJS0uySEpKMrG0MqhIMbJMtDC2SDVPTTNLMzJNXcTK75Sfk6LgmpKequCbmpKZCAADxmH0OwAAAA&mat=CaXEPb8iDwX6&ved=2ahUKEwjk6P3Vm_GCAxVjhP0HHdmDAcMQrMcEegQIChAG" target="_blank" rel="noopener noreferrer" className="text-white mx-2 pt-1">
            <FaGoogle  size='26px' />
          </a>

          <a href="https://www.youtube.com/channel/UCvsjTFnYLSXLWiIe0i2Et-g" target="_blank" rel="noopener noreferrer" className='mx-2'>
            <FaYoutube  size='32px' />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
