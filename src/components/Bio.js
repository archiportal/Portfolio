import React, { useEffect } from 'react'
import DPmaterial from '../Images/DPmaterial.jpeg'
import Aos from 'aos';
import "aos/dist/aos.css";

function Bio() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div data-aos='fade-right' className='flex md:flex-row flex-col justify-center items-center mx-6 px-0 p-4 md:p-8 bg-teal-600 rounded-lg shadow-md shadow-slate-400'>
      <div className='flex justify-center items-center w-3/5'>
        <h3 className=' text-slate-100 md:text-2xl text-xl font-burtons'>
          "I am Archisman Roy from Kolkata, India. Being a Computer Science student, when I started gaining skills in 
          development, I could see the potential it has. With the development 
          tools around us, we can literally shape our world. 
          I am mostly into Front-end development and am willing to assist you.
          So, let's shape the world together, shall we?"
        </h3>
      </div>
      <div className='flex justify-center items-center w-2/5'>
        <img src={DPmaterial} alt='DP' className='rounded-full h-full w-full md:h-4/5 md:w-4/5 lg:h-3/5 lg:w-3/5 m-5 shadow-md shadow-slate-800'/>
      </div>
    </div>
  )
}

export default Bio