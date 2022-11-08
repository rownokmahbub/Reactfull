import React from 'react'
import tv from '../Assets/tv.png'
import {AiFillHeart} from 'react-icons/ai'
const Ecard = () => {
  return (
    <div className='container mx-auto '>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="relative px-8 border-2 ">
                <img className='w-56 mx-auto flex justify-center items-center' src={tv} alt="" />
                <div className="absolute top-4 right-4">
                    <AiFillHeart/>
                </div>
                <div className="flex justify-between">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, illo.</p>
            <AiFillHeart/>
            </div>
            </div>
          
        </div>
    </div>
  )
}

export default Ecard