import userEvent from '@testing-library/user-event'
import React from 'react'

const Card = () => {
        const User=[
            {
                name: "rownok mahbub",
                age:25,
                phone:[
                    {
                        home: '01798276894362',
                        office: '89374237'
                    }
                ]
            },
            {
                name: "rownok mahbub",
                age:25,
                phone:[
                    {
                        home: '01798276894362',
                        office: '89374237'
                    }
                ]
            },
        ]
  return (
    <div>
      {
        User.map((user,i)=>{
            return(
                <div key={i}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                  {user.phone.map((phone, i)=> <div key={i}>
                    <p>Home :{phone.home}</p>
                    <p>Office :{phone.office}</p>
                  </div>)}
                </div>
            )
        })
      }
    </div>
  )
}

export default Card