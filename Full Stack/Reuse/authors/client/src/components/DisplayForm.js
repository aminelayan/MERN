import React, { useState } from 'react'
import { Input, InputLabel} from "@material-ui/core"
import { Link, useNavigate } from 'react-router-dom';
const DisplayForm = (props) => {
  const {createAuthor,names}=props;
  const [name,setName]=useState(names);
  const navigate=useNavigate()
  
  const onSubmitHandler= e =>{
    e.preventDefault();
    createAuthor({name})
    setName("")
    navigate('/')

  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} style={{maginBottom:"2rem"}}>
        <InputLabel>Author Name</InputLabel>
        <Input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
        <Input type='submit'/>
      </form>
    </div>
  )
}

export default DisplayForm