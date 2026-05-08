import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent=(props)=> {
  console.log(props.users);
  return(
    <div id= 'right' className='h-full flex rounded-4xl overflow-x-auto flexno-wrap gap-10 w-2/3 p-6'>
      {props.users.map(function(elem,idx){
        console.log()
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>

      })}
    </div>
  )
}
export default RightContent