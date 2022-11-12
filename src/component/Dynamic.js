import React from 'react'
import { useState,useEffect } from 'react'

const Dynamic = () => {
    const error =true
    const [name,setName]=useState("")
    const [inputValid,setInputValid]=useState(false)
    useEffect(() => {
        name.length <2 ?  setInputValid(false) : setInputValid(true)
    
    
    }, [name])
    
    const handleChange=(e)=>{
        setName(e.target.value)
  
    }
  return (
    <div className='container mx-auto flex justify-center items-center h-screen gap-10 flex-col'>
        <p className={`${error ? "text-red-300 bg-blue-300" : "text-green-400 bg-red-300"}`}>welcome to dynamic style with tailwind css</p>
        <input onChange={handleChange} value={name} className={` ${inputValid ? "bg-green-400 p-4" : "bg-red-400 p-4"}`} type="text" />
    </div>
  )
}

export default Dynamic