import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
      <button className='bg-blue-400 px-7 py-4 uppercase rounded-full tracking-widest text-lg'>Digital banking platform</button>

      <nav className='flex items-center gap-8'>
        <Link
          to="/"
          className='text-lg font-medium tracking-wide text-gray-600 hover:text-blue-500 transition-colors duration-200'
        >
          Home
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
