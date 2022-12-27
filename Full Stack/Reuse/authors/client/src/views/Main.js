import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import DisplayForm from '../components/DisplayForm'
import DisplayAuthor from '../components/DisplayAuthor'

const Main = () => {
    const [author,setAuthor]= useState([])
    const [loaded,setLoaded]= useState(false)
    
    useEffect(()=>{
      axios.get('http://localhost:8000/api')
      .then (res =>{
        setAuthor(res.data)
        setLoaded(true);
      })
    },[])
    
    const createAuthor = authors  =>{
      axios.post('http://localhost:8000/api',authors)
      .then(res=>{setAuthor([...author,res.data])
      })
    }
    const removeFromDom = authors =>{
      setAuthor(author.filter(auth=>auth._id != authors))
    }

  return (
    <div>
      <DisplayForm createAuthor={createAuthor} names=""/>
     {/* {loaded && <DisplayAuthor author={author} removeFromDom={removeFromDom}/>} */}

    </div>
  )
}

export default Main