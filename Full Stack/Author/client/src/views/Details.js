import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [author,setAuthor]= useState({})
    const {id} =useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
        .then(res=> setAuthor(res.data))
        .catch(err => console.error(err))
    },[]);

  return (
    <div>
        <p>ID: {author._id}</p>
        <p>Name: {author.name}</p>
    </div>
  )
}

export default Details