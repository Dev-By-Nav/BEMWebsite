import React from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'




import './ProjectFeatures.css'

function ClientFeatures(props) {
    const projects = [
        {
            image: project1,
            title: 'Project 1 of 3: Shine Pro Auto',
            description: 'This is a example project where we crafted a stunning web design, a simple yet impactful logo, and captivating flyer and business card designs, each element telling a unique story. This project embodies our commitment to meaningful, creative, and unique design elements that capture the essence of our clients work.'
        },
        {
            image: project2,
            title: 'Project 2 of 3: SmileBooth360',
            description: 'Dive into detailed vendor profiles where you can explore their portfolios, reviews from past clients, and crucial contact information. Get a comprehensive view of their work and reputation.'
        },
        {
            image: project2,
            title: 'Direct Messaging and Quotes:',
            description: 'Connect directly with vendors using our built-in contact form. Send messages to discuss your requirements, ask questions or request a quote, making it convenient to gather info.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative bg-black flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-8 ">
                
                <h3 className="absolute top-8 mb-8 text-center font-bold text-bem-primary text-2xl font-montserrat">Portfolio</h3>




            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-container ">
                {projects.map((project, index) => (
                    <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  md:p-44 mt-10 h-screen">
                        <img
                            src={project.image}
                            alt=""
                            className='md:h-2/3 w-auto'
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl text-[#fffddc]">
                            <h4 className="text-3xl font-semibold text-center font-montserrat">
                                {project.title}
                            </h4>
                            <p className=" text-lg text-center md:text-center w-full lg:w-3/4 font-raleway mx-auto">
                                {project.description}
                            </p>
                            
                            
                        </div>

                    </div>
                ))} 
            </div>
            <div className="w-full absolute top-[30%] bg-bem-primary/20 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default ClientFeatures;
