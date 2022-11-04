import React from "react";
import { useState } from "react";
import {TiDelete} from 'react-icons/ti'
const Todo = () => {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    const task={
      id: todoList.length==0 ? 1 : todoList[todoList.length-1].id +1,
      taskName:newTask,
      completed:false,
    }
    setTodolist([...todoList, task]);
  };
const deleteTask =(id)=>{
  setTodolist(todoList.filter((task)=> task.id !== id))
};
const completeTask =(id)=>{
  setTodolist(todoList.map((task)=>{
  if (task.id == id) {
    return {...task, completed:true}
    
  }
  else{
    return task
  }
  }))
}
  return (
    <div className="container mx-auto h-screen ">
      <div className=" flex justify-center items-center gap-3 mt-20">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={addTask}
          className="btn bg-blue-500 outline-none border-none"
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {todoList.map((task, i) => {
          return (
            <div className="flex justify-between items-center w-48">
              <h1 key={i} className="font-semibold text-xl">
                {task.taskName}
              </h1>
              <p className="px-3 py-2 bg-green-600" onClick={()=>completeTask(task.completed)}>complete</p>
              <TiDelete className="text-3xl text-red-500 flex-shrink-0 cursor-pointer" onClick={()=>deleteTask(task.id)}/>
           
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
