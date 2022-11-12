import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SearchCountry = (props) => {
    const [search,setSearch]=useState("")
   const handleChange=(e)=>{
        setSearch(e.target.value)
        
    }
    useEffect(()=>{
       props.onSearch(setSearch)
    },[])
  return (
    <div className='container mx-auto flex justify-center pt-10'>
        <input className='p-2 bg-gradient-to-r from-slate-50 rounded-lg shadow-lg focus:outline-blue-300 to-blue-50 text-black' value={search} onChange={handleChange} type="text" placeholder='search country ..' />
    </div>
  )
}

export default SearchCountry