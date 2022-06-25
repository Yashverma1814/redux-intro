import React from 'react'
import { useSelector } from 'react-redux';

const Todo = () => {

    const todos = useSelector((state) => state.todos)

    console.log(todos);

  return (
    <div>
      <h3>List Items</h3>
      {todos.map((item)=>(
        <div key={item.id}>
            <a href="#">{item.title}</a>
        </div>
      ))}
    </div>
  )
}

export { Todo };
