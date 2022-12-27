import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayAuthor from '../components/DisplayAuthor'

const Display = () => {
    const [author,setAuthor]= useState([])
    const [loaded,setLoaded]= useState(false)
    
    useEffect(()=>{
      axios.get('http://localhost:8000/api')
      .then (res =>{
        setAuthor(res.data)
        setLoaded(true);
      })
    },[])
    const removeFromDom = authors =>{
      setAuthor(author.filter(auth=>auth._id != authors))
    }

  return (
    <div>
     {loaded && <DisplayAuthor author={author} removeFromDom={removeFromDom}/>}

    </div>
  )
}
export default Display