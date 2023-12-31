import React from 'react';
import Navbar from '../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../assets/video.mp4';
import About from '../Components/About';
import ServiceTiles from '../Components/ServiceTiles';
import Benefits from '../Components/Benefits';
import Project from '../Components/Project';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className='bg-black h-full'>
      <Navbar />
      
      <div className="bg-black">
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          className="video-background"
        />
      </div>

      {/* Additional content */}
      <div className='bg-black h-full'>

        <About />
        <ServiceTiles />
        <Benefits />
        <Project />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default Home;