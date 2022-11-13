import React from 'react'
import { useRef } from 'react'

const UserForm = () => {
   const nameRef= useRef()
   const emailRef= useRef()
   const passRef= useRef()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const userName = nameRef.current.value
        const email = emailRef.current.value
        const  pass = passRef.current.value
        console.log({userName, email,pass})
    }
  return (
    <div className='bg-gray-900 h-screen  flex flex-col justify-center items-center'>
        <p className='text-white text-2xl capitalize my-5'>please fill this from </p>
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <input  name='name'   type="text" placeholder='name' className='bg-gray-700 px-4 py-2 rounded-md' required ref={nameRef}/>
            <input name='email'    type="email" placeholder='email' className='bg-gray-700 px-4 py-2 rounded-md' required ref={emailRef}/>
            <input  name='password' type="password" placeholder='password' className='bg-gray-700 px-4 py-2 rounded-md' required ref={passRef}/>
            <button  name='name' type='submit' className='btn bg-green-500'>register</button>
        </form>
    </div>
  )
}

export default UserForm