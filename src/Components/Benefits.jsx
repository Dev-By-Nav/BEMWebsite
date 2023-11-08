import React from 'react'
import service1 from '../assets/graphics.png'
import service2 from '../assets/megaphones.png'
import service3 from '../assets/puzzles.png'
import service4 from '../assets/stars.png'


function Benefits() {
  return (
    <div className='flex flex-col md:flex-row py-20'>

        <div className="md:w-1/4 flex justify-center items-center flex-col py-6">
            <img src={service3} alt="" className="  h-14 w-auto " />
            <h1 className=" pt-5 font-montserrat text-xl text-white font-semibold text-center">Tailored Solutions</h1>
            <p className=" pt-3 text-white font-raleway text-center w-3/4">Customized services to meet your unique business needs.</p>
        </div>

        <div className="md:w-1/4 flex justify-center items-center flex-col py-6">
            <img src={service2} alt="" className=" h-14 w-auto" />
            <h1 className=" pt-5 font-montserrat text-xl text-white font-semibold text-center">Reach New Customers</h1>
            <p className="pt-3 text-white font-raleway text-center w-3/4">Powerful digital strategies for reaching a broader audience.</p>
        </div>

        <div className="md:w-1/4 flex justify-center items-center flex-col py-6">
            <img src={service1} alt="" className=" h-14 w-auto" />
            <h1 className=" pt-5 font-montserrat text-xl text-white font-semibold text-center">Professional Branding</h1>
            <p className="pt-3 text-white font-raleway text-center w-3/4">Expert design skills to create a strong brand identity.</p>
        </div>

        <div className="md:w-1/4 flex justify-center items-center flex-col py-6">
            <img src={service4} alt="" className=" h-14 w-auto" />
            <h1 className=" pt-5 font-montserrat text-xl text-white font-semibold text-center">Incredible Results</h1>
            <p className="pt-3 text-white font-raleway text-center w-3/4">See your business grow to new heights with what we give to you.</p>
        </div>
    </div>
  )
}

export default Benefits