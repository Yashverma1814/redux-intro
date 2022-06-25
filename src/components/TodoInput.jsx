import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/action';
import {v4 as uuid} from "uuid";

const TodoInput = () => {
  const [title,setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handelAdd = () => {
    const payload = {
        title,
        status: false,
        id:uuid()
    };
    const addTodoAction = addTodo(payload)
    dispatch(addTodoAction);
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input type="text" placeholder='add here...' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handelAdd}>ADD</button>
    </div>
  )
}

export { TodoInput }
