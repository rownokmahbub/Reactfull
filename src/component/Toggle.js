import React from 'react'
import { useState } from 'react'
const Toggle = () => {
const [toggle,setToggle]= useState(true)
  return (
    <div className='bg-purple-400 h-screen flex flex-col gap-5 justify-center items-center mx-auto'>
{toggle && (
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsam.</p>
)}
     <button onClick={()=>{setToggle(!toggle)}} className='btn btn-outline'>
      {toggle ? "hide" : "show"}
     </button>
    </div>
  )
}

export default Toggle