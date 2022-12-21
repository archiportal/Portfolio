import React from 'react'

function AboutMe() {
  return (
    <div className='h-full w-full lg:w-1/2 flex flex-col gap-6 p-7 pt-12 lg:mb-0 mb-3 items-center rounded-lg bg-green-100 shadow-md shadow-slate-400'>
    <h3 className='text-5xl font-burtons text-teal-700 p-4'>About Me</h3>
    <div className='flex gap-4 w-full items-center justify-center'>
      <div className='text-left w-1/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>Date Of Birth</h3>
      </div>
      <div className='text-left w-2/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>15th June, 2000</h3>
      </div>
      </div>
      <div className='flex gap-4 w-full items-center justify-center'>
      <div className='text-left w-1/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>School</h3>
      </div>
      <div className='text-left w-2/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>South Point High School</h3>
      </div>
    </div>
    <div className='flex gap-4 w-full items-center justify-center'>
      <div className='text-left w-1/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>College</h3>
      </div>
      <div className='text-left w-2/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>St. Thomas' College of Engineering and Technology</h3>
      </div>
    </div>
    <div className='flex gap-4 w-full items-center justify-center'>
      <div className='text-left w-1/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>Course</h3>
      </div>
      <div className='text-left w-2/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>Bachelor of Technology (B.Tech)</h3>
      </div>
    </div>
    <div className='flex gap-4 w-full items-center justify-center'>
      <div className='text-left w-1/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>Stream</h3>
      </div>
      <div className='text-left w-2/3'>
        <h3 className='md:text-3xl text-2xl text-teal-700 font-burtons'>Computer Science and Engineering (CSE)</h3>
      </div>
    </div>
    </div>
  )
}

export default AboutMe