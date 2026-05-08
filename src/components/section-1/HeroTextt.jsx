import React from 'react'
import { Link } from 'react-router-dom'

const HeroTextt = () => {
  return (
    <div className='flex flex-col gap-6 max-w-2xl p-10 hero-content-fade'>
      <div className='inline-block w-fit bg-gray-200/50 backdrop-blur-md px-5 py-2 rounded-full border border-amber-100 shadow-sm'>
        <span className='text-xs font-bold uppercase tracking-widest text-blue-500'>Target Audience</span>
      </div>

      <h3 className='text-7xl font-bold leading-[1.1] tracking-tighter text-gray-800'>
        Prospective <br /> 
        Customer <br /> 
        <span className='text-blue-600'>Segmentation</span>
      </h3>

      <p className='text-xl leading-relaxed text-gray-600 font-medium max-w-lg'>
        Effective customer segmentation is the foundation of data-driven Marketing. We move beyond broad categories to understand the unique pain points of every prospect.
      </p>

      <Link
        to="/overview"
        className='mt-40 flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-500 cursor-pointer group shadow-md'
      >
        <i className="ri-arrow-right-up-line text-4xl group-hover:rotate-45 transition-transform duration-300"></i>
      </Link>
    </div>
  )
}

export default HeroTextt
