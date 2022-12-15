import React from 'react'

const Display = (props) => {
  return (
    <div>


        {props.todos.map((amin,idx)=>{
        return(<div key={idx}>{amin.text}</div>
        )})}
    </div>
  )
}

export default Display