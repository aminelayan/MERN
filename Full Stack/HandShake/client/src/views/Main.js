import React, { useState } from 'react'
import Tanas from '../components/Tanas'
import TanasForm from '../components/TanasForm'

const Main = () => {
const [username,setUsername]=useState("")

// const SetName= (Name) =>{
//     setUsername(Name)

// }

  return (
    <div>
        
    {!username?<TanasForm Name={(name)=>setUsername(name)}/>:
    <Tanas username={username}/>}

    </div>
  )
}

export default Main