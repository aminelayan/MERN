import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DisplayForm from '../components/DisplayForm'

const Update = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [author,setAuthor]= useState([])
    const [loaded,setLoaded]= useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/'+id)
        .then (res =>{
          setAuthor(res.data)
          setLoaded(true);
        })
      },[])
      
      const createAuthor = authors  =>{
        axios.put('http://localhost:8000/api/'+id,authors)
        .then(res=>{setAuthor([...author,res.data])
        })
        .then(navigate('/'))
      }
  return (
    <>
  {loaded && ( <DisplayForm
  createAuthor={createAuthor}
    names={author.name} />)}
    </>
  )
  
}

export default Update;