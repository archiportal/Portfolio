import React, {useEffect} from 'react'
import NFTWarranty from '../Images/NFTWarranty.png'
import MUIForm from '../Images/MUIForm.png'
import WeatherApp from '../Images/WeatherApp.png'
import Aos from 'aos';
import "aos/dist/aos.css";

function Projects() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div data-aos='fade-up' className='flex flex-col gap-3 md:p-7 p-4 items-center my-6 md:mx-6 mx-3 rounded-lg bg-slate-100 shadow-md shadow-slate-500'>
    <h3 className='text-5xl font-burtons text-slate-500 m-6'>Projects</h3>
    <div className='flex lg:flex-row flex-col justify-center w-full gap-8 items-center'>
    <div className="max-w-lg lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-slate-500 shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <img className="rounded-t-lg" src={MUIForm} alt="MultiPage Form" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Multi-Page Form</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A MERN stack application built using React and designed with Material UI and form data stored in MongoDB. Also, we are retrieving the data and showing previous records of the users.</p>
    <a href="https://multistepmui.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        Go To Page
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
    </div>
    </div>
    <div className="max-w-lg lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-slate-500 shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <img className="rounded-t-lg" src={NFTWarranty} alt="SoulNFT" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blockchain warranty system using NFTs</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An application, built using Next JS, for minting dynamic NFTs that will expire after a specified period of time.</p>
    <a href="https://soulnft.vercel.app/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        Go To Page
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
    </div>
    </div>
    <div className="max-w-lg lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-slate-600 shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <img className="rounded-t-lg" src={WeatherApp} alt="Weather Application" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather Application</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple weather application built using HTML, CSS and JavaScript. It also recommends you places of the searched destination. OpenWeather and RapidAPI used for it.</p>
    <a href="https://archiportal.github.io/weather_app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        Go To Page
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Projects