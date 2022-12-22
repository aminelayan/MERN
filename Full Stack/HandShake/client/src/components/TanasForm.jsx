import React from 'react'
import { useState } from 'react';

const TanasForm = (props) => {
const [username,setUsername]= useState("")


    const OnSubmitHandler = e =>{
        e.preventDefault();
        props.Name(username)
    }

return (
    <div>
        <h1>Enter Your User Name</h1>
        <form onSubmit={OnSubmitHandler}>
        <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type="submit" value="Tanas"/>
        </form>
    </div>
  )
}

export default TanasForm