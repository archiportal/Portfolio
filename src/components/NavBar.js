import React from 'react';

function NavBar() {
  return (
    <div className='bg-teal-600 h-28 py-10 px-10 flex justify-between shadow-md shadow-slate-400'>
        <h1 className='font-extrabold text-4xl text-slate-100 font-burtons'>@Archi's</h1>
        <ul className='flex items-center'>
          <li><a className='bg-gradient-to-r from-slate-100 to-slate-300 px-4 py-2 rounded-md ml-8 font-semibold text-2xl font-burtons' href='https://drive.google.com/file/d/1yhUTbHh8MRRzdoWMBJ8prLc5cvJpsaRD/view'>Resume</a></li>
        </ul>
    </div>
  )
}

export default NavBar