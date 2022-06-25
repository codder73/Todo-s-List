import React from 'react'
import {TodoItem} from './TodoItem'
// import {todo} from '..src/App'

export const Todos = ({todos, onDelete}) => {
  let myStyle = {
    minHeight: '70vh',
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h1 className='my-3'>Todos List</h1>
      {todos.length===0? "Add some todos to display":
      todos.map((todo)=>{
          return (
            <>
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/> 
          <hr />
            </>
      )})}
    </div>
  )
}
 