import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Service1 from '../assets/service1.png';
import Service2 from '../assets/service2.png';
import Service3 from '../assets/service3.png';
import Service4 from '../assets/service4.png';
import { Link } from 'react-router-dom';

const serviceVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { opacity: 1, x: 0 },
};

function ServiceTiles() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 700;

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-8 mt-0  font-montserrat text-center text-bem-primary">Our Services</h1>

    
    <div className='flex flex-col lg:flex-row w-full sm:px-36 px-8 cursor-pointer'>
    


      <motion.div
        className="text-center relative group"
        animate={isScrolled ? 'visible' : 'hidden'}
        variants={serviceVariants}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-bem-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity font-montserrat">Web Design & Development</p>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:hidden font-bold text-3xl font-montserrat">Web Design & Development</p>

        <motion.img src={Service1} alt="" className="p-4" />
      </motion.div>



      <motion.div
        className="text-center relative group"
        animate={isScrolled ? 'visible' : 'hidden'}
        variants={{ ...serviceVariants, x: '100%' }}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-bem-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity font-montserrat">Printing</p>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:hidden font-bold text-3xl font-montserrat">Printing</p>

        <motion.img src={Service2} alt="" className="p-4" />
      </motion.div>

      {isScrolled && (
        <>
          <motion.div
            className="text-center relative group"
            initial="hidden"
            animate="visible"
            variants={serviceVariants}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-bem-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity font-montserrat">Company Material</p>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:hidden font-bold text-3xl font-montserrat ">Company Material</p>

            <motion.img src={Service3} alt="" className="p-4" />
          </motion.div>

          <motion.div
            className="text-center relative group"
            initial="hidden"
            animate="visible"
            variants={{ ...serviceVariants, x: '100%' }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-bem-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity font-montserrat">Social Media</p>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:hidden font-bold text-3xl font-montserrat">Social Media</p>

            <motion.img src={Service4} alt="" className="p-4" />
          </motion.div>
          
        </>
        
      )}

    </div>
    </div>
  );
}

export default ServiceTiles;
