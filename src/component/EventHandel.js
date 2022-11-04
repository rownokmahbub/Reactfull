import React from 'react'

const EventHandel = () => {
 const shoot =(e)=>{
    alert(e)
 }
  return (
    <div>
      
        <button onClick={()=> shoot("goallll")}>Take a  short</button>
    </div>
  )
}

export default EventHandel