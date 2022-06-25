import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Title or description cannot be empty');
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setdesc("");
        }
    }
  return (
    <div className='container my-3'>
    <h3>Add Todo</h3>
    <form onSubmit={submit}>
        <div className="mb-3 ">
            <label htmlFor="title" className="form-label">Todo title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Desc</label>
            <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}}  className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-sn btn-success">Add It!</button>
        <br />
    </form>
    </div>
    )
}
