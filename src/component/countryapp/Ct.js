import React from 'react'

const Ct = (props) => {
  
    const {name,flags, capital,population,area}=props.cn
    const handleRemove=(name)=>{
        props.onRemove(name)
    }
  return (

  
    
        <div className='bg-gradient-to-r from-cyan-100 to-blue-100 drop-shadow-sm px-4 py-4 rounded-lg flex flex-col gap-2'>
        <img className='h-32 md:h-48 rounded-lg' src={flags.png} alt={name.common} />
        <p className='text-xl font-medium text-slate-900'> Name : {name.common}</p>
        <p className='text-lg '>Population: {population}</p>
        <p className='text-lg'>Capital: {capital}</p>
        <p className='text-lg'>Area: {area}</p>
        <button className='btn btn-error capitalize btn-' onClick={()=>{handleRemove(name.common)}}>Remove Country</button>
    </div>
  

  )
}

export default Ct