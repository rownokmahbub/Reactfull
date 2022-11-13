import React from 'react'
import { useState ,useReducer} from 'react'

const booksData = [
    {id:1, name: "rownok mahbub"},
    {id:2, name: "mahfuza reya"},
    {id:3, name: "hames mahbub"},
]
const Modal =({modal})=>{
 return   <p>
{modal}
    </p>
}
const reducer=(state, action)=>{
    if(action.type==='Add'){
        const allbooks=[...state.books,action.payload]
return {
    ...state,
    books:allbooks,
    ismodal:true,
    modal: "book is added"
}
    }
    if(action.type=== 'Remove'){
        const filterBooks =[...state.books].filter((book)=> book.id !== action.payload)
        return{
            ...state,
            books:filterBooks,
            ismodal:true,
            modal:"Book is removed !!"
        }
    }
    return state
}
const UseReducer = () => {
    const [bookname,SetBookName]=useState('')
    const [bookState, dispatch]=useReducer(reducer,{
        books:booksData,
        ismodal:false,
        modal:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
     
            const newBook = {id: new Date().getTime().toString(),name:bookname}
            dispatch({type: "Add" , payload: newBook})
            SetBookName("")
  
    }
    const removeBook=(id)=>{
      dispatch({type:"Remove", payload:id})
    }
  return (
    <div>
        <p>ook list </p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={ bookname} onChange={(e)=>{SetBookName(e.target.value)}}/>
            <button type='submit'>add book</button>
        </form>
        {bookState.ismodal && <Modal modal={bookState.modal}/>}
        {bookState.books.map((book)=>{
            const {id,name}=book
            return <li key={id}>
                {name}
                <button className='btn btn-error btn-sm' onClick={()=>{removeBook(id)}}>Remove</button>
            </li>
        })}
    </div>
  )
}

export default UseReducer