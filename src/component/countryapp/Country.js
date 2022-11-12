import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Ct from './Ct'
const Country = (props) => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 gap-5 md:gap-10'>
        {props.country.map((cn)=>{
            const countryNew= {cn,id:uuidv4()}
          return <Ct {...countryNew} key={countryNew.id} onRemove={props.onRemoveCountry}/>
            
        })}
    </div>
  )
}

export default Country