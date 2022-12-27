import React from 'react'

const Display = (props) => {
  return (
    <div>


        {props.todos.map((amin,idx)=>{
        return(<div key={idx}>
          <p style={{textDecoration:amin.completed?"line-through":""}}>{amin.text}</p>
          <input type="checkbox" onChange={e=>props.updateTask(amin)}/>
          <button onClick={e=>props.deleteTask(amin)}>Delete</button>
          </div>
        )})}
    </div>
  )
}

export default Display