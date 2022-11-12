import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
const DataFetch = () => {
const {data,isLoading,error}= useFetch("https://jsonplaceholder.typicode.com/todos")
  const todoElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}> {todo.title}</p>;
    });
   
    const loadingMessege = <p> todos is loading</p>
    const errorMsg = <p>{error}</p>
  return (
    <div>
      <p>Todos </p>
      {error && <p>{error}</p>}
      {isLoading && loadingMessege}
      {todoElement}
    </div>
  );
};

export default DataFetch;
