import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import AuthorList from '../components/AuthorList'


const AllAuthor = () => {
    const[loaded,setLoaded]=useState(false)
    const[author,setAuthor]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/')
        .then(res =>{
            setAuthor(res.data)
            setLoaded(true);
        })
        .catch(err => console.log(err))
    },[author]);
  return (
    <div>
            {loaded && <AuthorList author={author}/>}
    </div>
  )
}

export default AllAuthor