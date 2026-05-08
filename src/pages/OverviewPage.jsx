import React from 'react'
import { Link } from 'react-router-dom'
import users from '../data/users'

const OverviewPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      {/* Back */}
      <div className='px-16 py-6'>
        <Link
          to="/"
          className='flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 w-fit'
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className='text-lg font-medium'>Back</span>
        </Link>
      </div>

      {/* Header */}
      <div className='px-16 pb-12'>
        <div className='inline-block w-fit bg-gray-200/50 backdrop-blur-md px-5 py-2 rounded-full border border-amber-100 shadow-sm mb-6'>
          <span className='text-xs font-bold uppercase tracking-widest text-blue-500'>All Segments</span>
        </div>
        <h1 className='text-6xl font-bold leading-tight tracking-tighter text-gray-800'>
          Customer <br />
          <span className='text-blue-600'>Segmentation</span>
        </h1>
      </div>

      {/* Segments list */}
      <div className='px-16 pb-16 flex flex-col gap-0'>
        {users.map((user, idx) => (
          <Link
            key={idx}
            to={`/${user.tag.toLowerCase()}`}
            className='group flex items-start justify-between gap-10 py-8 border-t border-gray-200 hover:border-blue-300 transition-colors duration-300'
          >
            <div className='flex items-start gap-8 flex-1'>
              <span className='text-sm font-bold text-gray-300 w-6 pt-1'>0{user.count}</span>
              <div className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>
                  {user.tag}
                </h2>
                <p className='text-lg leading-relaxed text-gray-500 max-w-2xl'>
                  {user.description}
                </p>
              </div>
            </div>
            <div className='shrink-0 mt-1 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-gray-400 transition-all duration-300'>
              <i className="ri-arrow-right-up-line text-xl group-hover:rotate-45 transition-transform duration-300"></i>
            </div>
          </Link>
        ))}
        <div className='border-t border-gray-200'></div>
      </div>

    </div>
  )
}

export default OverviewPage
