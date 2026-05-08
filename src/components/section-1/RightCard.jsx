import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  console.log(props,"props")
  return (
    <div className='h-full overflow-hidden shrink-0 relative w-80 rounded-4xl'>
      
      <img
        className='h-full w-full object-cover'
        src={props.img}
        alt=""
      />

      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>
          {props.count} 
        </h2>

        <div>
          <p className='text-xl leading-normal text-white mb-10'>
            
          </p>
        </div>

        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full text-lg flex items-center gap-2'>
            {props.tag}
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

      </div>
      <RightCardContent id={props.id}tag={props.tag} intro={props.intro}/>

    </div>
  )
}

export default RightCard 