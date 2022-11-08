import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
const CatFact = () => {

    const [cat,setCat]=useState(null)
    useEffect(()=>{
     handlefatch()
    },[])
    const [page, setPage]=useState(0)
   const handlefatch=()=>{
    Axios.get(`https://api.agify.io/?name=${cat}`).then((res)=>{
        setPage(res.data.age);
      })
   }
  return (
    <div className='h-screen  mx-auto flex justify-center items-center bg-gray-900 flex-col gap-10'>
        <input onChange={(e)=>{setCat(e.target.value)}} className='px-4 py-2 bg-gray-700 text-white rounded-lg' type="text" placeholder='Ex. Rownok... ' />
        <button onClick={handlefatch} className='text-lg btn btn-primary'>generate Cat fact</button>
        <p className="text-white text-2xl">{page}</p>
    </div>
  )
}

export default CatFact