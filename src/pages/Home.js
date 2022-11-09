import React from 'react'
import ChangeProfile from '../component/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'
const Home = () => {
  const {username}= useContext(AppContext)
  return (
    <div> this userrname is : {username}
      <ChangeProfile />
    </div>
  )
}

export default Home