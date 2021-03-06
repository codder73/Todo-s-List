import React from 'react'
// import todos from '../App'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={() => {onDelete(todo)}}> Delete  </button>

    </div>
  )
}
 