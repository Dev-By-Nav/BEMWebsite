import React from 'react';
import service1 from '../assets/service1.png'

function ServicesDesc() {
  return (
    <div>

          <div className="flex items-center justify-center">

      <div className="">
        {/* Your image goes here */}
        <img src={service1} alt="Service Image" className=" w-80" />
      </div>

      <div className=" p-4">
        <h2 className="text-2xl font-bold mb-2 text-bem-primary font-montserrat">Web Design & Development</h2>
        <p className="mb-4 text-white  text-base font-montserrat">Text describing your service goes here.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
      </div>

          </div>

          
          <div className="flex items-center justify-center">
            
          <div className=" p-4">
              <h2 className="text-2xl font-bold mb-2 text-bem-primary font-montserrat">Web Design & Development</h2>
              <p className="mb-4 text-white  text-base font-montserrat">Text describing your service goes here.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
            </div>

            <div className="">
              {/* Your image goes here */}
              <img src={service1} alt="Service Image" className=" w-80" />
            </div>
            
            

          </div>

          <div className="flex items-center justify-center">

            <div className="">
              {/* Your image goes here */}
              <img src={service1} alt="Service Image" className=" w-80" />
            </div>
            
            <div className=" p-4">
              <h2 className="text-2xl font-bold mb-2 text-bem-primary font-montserrat">Web Design & Development</h2>
              <p className="mb-4 text-white  text-base font-montserrat">Text describing your service goes here.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
            </div>

          </div>


          <div className="flex items-center justify-center">
            
          <div className=" p-4">
              <h2 className="text-2xl font-bold mb-2 text-bem-primary font-montserrat">Web Design & Development</h2>
              <p className="mb-4 text-white  text-base font-montserrat">Text describing your service goes here.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
            </div>

            <div className="">
              {/* Your image goes here */}
              <img src={service1} alt="Service Image" className=" w-80" />
            </div>
            
            

          </div>

    </div>
  );
}

export default ServicesDesc;
