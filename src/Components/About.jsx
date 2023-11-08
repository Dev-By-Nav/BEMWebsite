import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/about-img.png';

function About() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('about-section').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsAnimated(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="about-section" className="flex flex-col items-center justify-center p-8">

      <div className="flex flex-col md:flex-row items-center justify-center">

        <motion.div
          initial="hidden"
          animate={isAnimated ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="md:pr-4"
        >
          <img
            className="rounded-lg shadow-md sm:h-96 h-721 w-auto"
            src={image}
            alt="Your Image"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isAnimated ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left"
        >
          <h1 className="text-2xl font-bold mb-8 mt-0 text-bn-gold font-montserrat text-bem-primary ">About Us</h1>
          <p className='font-raleway text-white'>
            Welcome to Bold Edge Media.<br /><br /> Where we redefine your brand's narrative through a spectrum of creative services. From innovative web design and development to captivating graphic design, our expertise extends seamlessly into marketing strategy, social media curation, and precise printing.<br />At the heart of Bold Edge Media lies a commitment to crafting holistic solutions that transcend traditional boundaries. We immerse ourselves in the art of digital and physical expression, ensuring your brand stands out in a world saturated with possibilities. Join us on a journey where every pixel, every strategy, and every print is a carefully orchestrated note in the symphony of your brand's success.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default About;
