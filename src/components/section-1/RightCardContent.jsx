  import React from 'react'
import { Link } from 'react-router-dom'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between shrink-0 feature-card-hover'>
      
      <div className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center shadow-lg border border-gray-100'>
        {props.id + 1}
      </div>
      <div className='text-glass-overlay rounded-xl'>
        <p className='text-xl leading-relaxed text-white mb-8 font-medium drop-shadow-md'>
          {props.intro}
        </p>

        <div className='flex justify-between items-center'>
          <Link
            to={`/${props.tag.toLowerCase()}`}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg flex items-center gap-3 transition-all duration-300 shadow-xl group'
          >
            <span>{props.tag}</span>
            <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default RightCardContent
