import React from 'react'
import { useState } from 'react'
const Todo = () => {
    const [todoList, setTodolist] = useState([])
    const [newTask, setNewTask]= useState("")
    const handleChange = (e)=>{
        setNewTask(e.target.value)
    }
    const addTask =()=>{
        const newTodoList = [...todoList, newTask]
        setTodolist(newTodoList)
    }
  return (
    <div className='container mx-auto h-screen '>
      <div className=' flex justify-center items-center gap-3 mt-20'>
     <input onChange={handleChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button onClick={addTask} className='btn bg-blue-500 outline-none border-none'>Add Task</button>
    
    </div>
    <div className="flex flex-col justify-center items-center">
        {todoList.map((task,i)=>{
            return <h1 key={i} className='font-semibold text-xl'>{task}</h1>
        })}
    </div>
    </div>
  
  )
}

export default Todo