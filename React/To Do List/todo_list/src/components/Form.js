import React, { useState } from 'react'

const Form = (props) => {
    const [todo,setTodo] = useState({})
    const todoHandler =(e)=>{
    setTodo({text:e.target.value,
            id:props.todos.length,
            completed:false
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.todos(todo)
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={todoHandler}/>
    <input type="submit" value="Add"/>
    </form>



    </div>
  )
}

export default Form