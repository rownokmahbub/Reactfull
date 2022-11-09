import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
const ChangeProfile = () => {
    const {setUserName}= useContext(AppContext)
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setUserName(e.target.value)
        }} />
        <button>change username</button>
    </div>
  )
}

export default ChangeProfile