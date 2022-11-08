import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [user,setUser]= useState({name: '', email: '', password:''})
  const {name,email,password} =user
  const handleChange= (e)=>{
    const filedName=e.target.name
 setUser({...user,[e.target.name]:e.target.value})
  }
    const handleSubmit=(e)=>{
   
console.log("form is submited")
      console.log(user)
      e.preventDefault();
    }
  return (
    <div className='bg-gray-900 h-screen  flex flex-col justify-center items-center'>
        <p className='text-white text-2xl capitalize my-5'>please fill this from </p>
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <input  name='name' onChange={handleChange} value={name} type="text" placeholder='name' className='bg-gray-700 px-4 py-2 rounded-md' required/>
            <input name='email'  onChange={handleChange} value={email}  type="email" placeholder='email' className='bg-gray-700 px-4 py-2 rounded-md' required/>
            <input  name='password'  onChange={handleChange} value={password} type="password" placeholder='password' className='bg-gray-700 px-4 py-2 rounded-md' required/>
            <button  name='name' type='submit' className='btn bg-green-500'>register</button>
        </form>
    </div>
  )
}

export default Form