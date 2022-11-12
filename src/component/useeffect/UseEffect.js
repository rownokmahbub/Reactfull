import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if(!res.ok){
          throw Error("fatching is not succesfull")
        }
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        setIsLOading(false)
        setError(null)
      }).catch((error)=>{
setError(error.message)
setIsLOading(false)
      });
  }, []);
  const todoElement =
    todo &&
    todo.map((todo) => {
      return <p key={todo.id}> {todo.title}</p>;
    });
    const [isLoading ,setIsLOading]= useState(true)
    const [error ,setError]= useState(null)
    const loadingMessege = <p> todos is loading</p>
  return (
    <div>
      <p>Todos </p>
      {error && <p>{error}</p>}
      {isLoading && loadingMessege}
      {todoElement}
    </div>
  );
};

export default UseEffect;
