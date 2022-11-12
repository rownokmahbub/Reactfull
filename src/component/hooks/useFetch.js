import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading ,setIsLOading]= useState(true)
    const [error ,setError]= useState(null)
    useEffect(() => {
      fetch()
        .then((res) => {
          if(!res.ok){
            throw Error("fatching is not succesfull")
          }
          else{
            return res.json();
          }
     
        })
        .then((data) => {
          setData(data);
          setIsLOading(false)
          setError(null)
        }).catch((error)=>{
  setError(error.message)
  setIsLOading(false)
        });
    }, [url]);
    return {data, isLoading, error}

}

export default useFetch