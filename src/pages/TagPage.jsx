import React from 'react'
import { useParams, Link } from 'react-router-dom'
import users from '../data/users'

const TagPage = () => {
  const { tag } = useParams()

  const user = users.find(u => u.tag.toLowerCase() === tag.toLowerCase())

  if (!user) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-6'>
        <h1 className='text-4xl font-bold text-gray-800'>Segment not found</h1>
        <Link to="/" className='text-blue-500 hover:text-blue-700 text-lg font-medium'>
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex flex-col'>

      {/* Back link */}
      <div className='px-16 py-6'>
        <Link
          to="/"
          className='flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 w-fit'
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className='text-lg font-medium'>Back</span>
        </Link>
      </div>

      {/* Content */}
      <div className='flex flex-1 items-center justify-center px-16'>
        <div className='max-w-2xl flex flex-col gap-8'>

          <div className='inline-block w-fit bg-gray-200/50 backdrop-blur-md px-5 py-2 rounded-full border border-amber-100 shadow-sm'>
            <span className='text-xs font-bold uppercase tracking-widest text-blue-500'>Customer Segment</span>
          </div>

          <h1 className='text-7xl font-bold leading-[1.1] tracking-tighter text-gray-800'>
            {user.tag}
          </h1>

          <p className='text-xl leading-relaxed text-gray-600 font-medium'>
            {user.description}
          </p>

        </div>
      </div>

    </div>
  )
}

export default TagPage
