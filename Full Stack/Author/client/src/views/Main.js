import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import AuthorList from '../components/AuthorList'

const Main = () => {
    const[loaded,setLoaded]=useState(false)
    const[author,setAuthor]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/')
        .then(res =>{
            setAuthor(res.data)
            setLoaded(true);
        })
        .catch(err => console.log(err))
    },[]);

    const createAuthor = author =>{
        axios.post('http://localhost:8000/api/author',author)
        .then(res =>{
            setAuthor([...author,res.data]);
        })
    }
  return (
    <div>
    <AuthorForm onSubmitProp={createAuthor} initialName=""/>
    {loaded && <AuthorList author={author}/>}
    </div>
  )
}

export default Main