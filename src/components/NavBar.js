import React from 'react';

function NavBar() {
  const reLoad = () => {
    window.location.reload();
  }
  return (
    <div className='bg-teal-600 h-28 py-10 px-10 flex justify-between shadow-md shadow-slate-400'>
        <h1 onClick={reLoad} className='font-extrabold md:text-4xl text-3xl text-slate-100 font-burtons cursor-pointer'>@Archi's</h1>
        <ul className='flex items-center'>
          <li><a className='bg-slate-200 text-gray-800 px-4 py-2 rounded-md ml-8 font-semibold md:text-2xl text-xl font-burtons hover:bg-slate-50 shadow-md shadow-slate-500' href='https://drive.google.com/file/d/1yhUTbHh8MRRzdoWMBJ8prLc5cvJpsaRD/view'>Resume</a></li>
        </ul>
    </div>
  )
}

export default NavBar