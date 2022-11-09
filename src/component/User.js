import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
const User = (props) => {
  return (
    <div>
    <h1>{props.username}</h1>

   
  </div>
  )
}

export default User