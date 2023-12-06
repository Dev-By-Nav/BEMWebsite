import React from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'






import './ProjectFeatures.css'
import { Link } from 'react-router-dom';

function ClientFeatures(props) {
    const projects = [
        {
            image: project1,
            title: 'Project 1 of 4: Shine Pro Auto',
            description: 'This is a example project where we crafted a stunning web design, a simple yet impactful logo, and captivating flyer and business card designs, each element telling a unique story. This project embodies our commitment to meaningful, creative, and unique design elements that capture the essence of our clients work.'
        },
        {
            image: project2,
            title: 'Project 2 of 4: Apex Builds',
            description: "For Apex Build, we crafted a powerful logo and an engaging website. The logo speaks volumes about their identity, while the website seamlessly blends modern aesthetics with user-friendly functionality. It's a testament to our commitment to delivering visually captivating design solutions that reflect Apex Build's mission and values"
        },
        {
            image: project3,
            title: 'Project 3 of 4: SmileBooth360',
            description: "Creating an immersive website for SmileBooth360, we embraced vibrant pink and white branding, capturing their lively identity. The clean, intuitive layout ensures seamless navigation, reflecting our commitment to aesthetics and user-friendly functionality. This site is a testament to translating the client's brand into a captivating online presence."
        },
        {
            image: project4,
            title: 'Project 4 of 4: Beat Nation Entertainment',
            description: "Elevating Beat Nation Entertainment's online presence, our website offers an immersive experience reflecting energetic beats and pulsating rhythm. Seamlessly integrating brand elements, it captures the essence of their entertainment services, showcasing our commitment to a visually captivating online presence."
        }
    ];

    return (

        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative bg-black flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-8 ">

                <h3 className="absolute top-12 mb-12 text-center font-bold text-bem-primary text-2xl font-montserrat">Portfolio</h3>



            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-container ">
                {projects.map((project, index) => (
                    <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-20 md:py-0 px-8 md:p-44 mt-10 h-screen">
                        <img
                            src={project.image}
                            alt=""
                            className='h-2/5 w-auto'
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl text-[#fffddc]">
                            <h4 className="text-3xl font-semibold text-center font-montserrat">
                                {project.title}
                            </h4>
                            <p className=" text-base font-montserrat text-center md:text-center w-full mx-auto pb-10 items-center flex justify-center">
                                {project.description}
                            </p>

                            {/* <Link to=''>
                            <button className="flex justify-center items-center mx-auto bg-bem-primary font-montserrat font-semibold hover:text-black mt-10  text-white p-2 px-3 rounded-md">
                                More Info
                            </button>
                            </Link> */}

                        </div>

                    </div>
                ))} 
            </div>
            <div className="w-full absolute top-[30%] bg-bem-primary/20 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default ClientFeatures;
