import React from 'react'

function About() {
  return (
        <div className=' h-full w-full lg:w-1/2 flex flex-col justify-center gap-3 md:p-7 py-7 text-center rounded-lg bg-green-100 shadow-md shadow-slate-400'>
            <h3 className='text-5xl font-burtons text-teal-700 p-2'>Skills</h3>
            <div className='flex flex-col p-2 justify-center'>
            <span className='text-3xl font-burtons text-teal-700 mb-2'>Java :</span>
            <div className=" mx-8 bg-gray-300 rounded-full h-4">
            <div className=" bg-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-4" style={{width : '87%'}}>
            </div>
            </div>
            </div>
            <div className='flex flex-col p-2 justify-center'>
            <span className='text-3xl font-burtons text-teal-700 mb-2 text'>Python :</span>
            <div className=" mx-8 bg-gray-300 rounded-full h-4">
            <div className=" bg-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-4" style={{width : '70%'}}>
            </div>
            </div>
            </div>
            <div className='flex flex-col p-2 justify-center'>
            <span className='text-3xl font-burtons text-teal-700 mb-2'>JavaScript :</span>
            <div className=" mx-8 bg-gray-300 rounded-full h-4">
            <div className=" bg-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-4" style={{width : '80%'}}>
            </div>
            </div>
            </div>
            <div className='flex flex-col p-2 justify-center'>
            <span className='text-3xl font-burtons text-teal-700 mb-2'>ReactJS :</span>
            <div className=" mx-8 bg-gray-300 rounded-full h-4">
            <div className=" bg-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-4" style={{width : '80%'}}>
            </div>
            </div>
            </div>
            <div className='flex flex-col p-2 justify-center'>
            <span className='text-3xl font-burtons text-teal-700 mb-2'>SQL :</span>
            <div className=" mx-8 bg-gray-300 rounded-full h-4">
            <div className=" bg-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-4" style={{width : '75%'}}>
            </div>
            </div>
            </div>
        </div>
  )
}

export default About