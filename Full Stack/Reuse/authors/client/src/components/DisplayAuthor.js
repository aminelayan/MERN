import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const DisplayAuthor = (props) => {
const [author,setAuthor]=useState([]);
useEffect(()=>{
  axios.get('http://localhost:8000/api')
  .then (res=>setAuthor(res.data));
})
const Remove =authors =>{
  setAuthor(author.filter(auth=>auth.id != authors ))
}
  return (
    <div>
      <Link to={'/new'}>Add</Link>
        {author.map((authors,id)=>
        <div key={id}>
            <h1>{authors.name}</h1>
            <Link to={'/edit/'+authors._id}>Edit</Link>
            <DeleteButton author={authors._id} fun = {()=>Remove(authors._id)}/>
        </div>
        )}
    </div>
  )
}

export default DisplayAuthor