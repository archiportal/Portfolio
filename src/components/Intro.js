import React, {useEffect} from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import Bitmoji from '../Images/Bitmoji.jpeg'
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import "aos/dist/aos.css";

function Intro() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className='pb-4'>
    <div className='text-center p-10'>
      <div className='text-6xl text-teal-700 py-2 font-burtons'>
        <Typewriter onInit={(typewriter)=>{
          typewriter.typeString("Hi, I am Archisman").changeDelay(2000).start();
        }}/>
        </div>
        <p className='text-2xl py-2 font-burtons text-gray-600'></p>
    </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://www.linkedin.com/in/archismanroy007/'>
        <AiFillLinkedin className='cursor-pointer text-teal-700'/>
        </a>
        <a href='https://github.com/archiportal'>
        <AiFillGithub className='cursor-pointer text-teal-700'/>
        </a>
        <AiFillInstagram className='cursor-pointer text-teal-700'/>
      </div>
      <img data-aos='fade-up' src={Bitmoji} alt="Personal Logo" className='mx-auto rounded-full h-1/2 w-1/2 md:h-2/5 md:w-2/5 lg:h-1/3 lg:w-1/3 m-20 shadow-md shadow-slate-400'/>
    </div>
  )
}

export default Intro