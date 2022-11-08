import {useState} from 'react'
import {HiPlusCircle,HiMinusCircle} from 'react-icons/hi';
import {BiReset} from 'react-icons/bi'
const Counter = () => {
  const [count, setCount]= useState(0)
 const  handleIncremenet=()=>{
    setCount(count+1)
  }
  const handleDecrement=()=>{
    setCount(count-1)
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <div className=' flex flex-col h-screen  mx-auto justify-center items-center gap-6 bg-gray-900'>
      <p className='text-3xl font-semibold text-white'>counter app</p>
      <p  className='text-white font-medium text-2xl'>{count}</p>
<div className="flex cursor-pointer">
<HiPlusCircle className='text-4xl text-green-600' onClick={handleIncremenet} disabled={count===5?true:false}/>
     <HiMinusCircle className='text-4xl text-red-600' onClick={handleDecrement}/>
     <BiReset className='text-4xl text-yellow-600' onClick={handleReset}/>
</div>
     
    </div>
  )
}

export default Counter