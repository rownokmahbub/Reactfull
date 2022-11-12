import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Country from './Country'
import SearchCountry from './SearchCountry'
const url= "https://restcountries.com/v3.1/all"
const CountryFetch = () => {
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    const [country,setCountry]=useState([])
    const [filters,setFilter]=useState(country)
    const fetchData= async(url)=>{
        setIsLoading(true)
        try{
            const response =await fetch(url)
            const data=await response.json()
            setCountry(data)
            setFilter(data)
            setIsLoading(false)
            setError(null)
          
        }catch (error){
    isLoading(false)
    setError(error)
        }
      
    }
    useEffect(()=>{
        fetchData(url)
    },[])
    const handleRemove=(name)=>{
        const filter= filters.filter((cn)=>
        
        cn.name.common !== name)
        setFilter(filter)
    }
    const handleSearch = (searchValue) => {
        let value = searchValue
        const newCountries = country.filter((cn) => {
          const countryName = cn.name.common;
          return countryName.startsWith(value);
        });
        setFilter(newCountries);
      };
  return (
    <div>
{isLoading && <h1>loading</h1>}
{error && <h1>fetch error</h1>}
<p className='text-center text-3xl pt-10 capitalize'>Country Details finder</p>
<SearchCountry onSearch={handleSearch}/>
{country && <Country country={filters} onRemoveCountry={handleRemove}/>}
    </div>
  )
}

export default CountryFetch