import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams();
    const[title,setTitle]= useState('')
    const[description,setDescription]= useState('')
    const[price,setPrice]= useState('')

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+id)
        .then (res =>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
    },[])

    const updateProduct = e =>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/'+id,{
            title,
            price,
            description
        })
        .then (res => console.log(res))
        .catch (err => console.error(err));
    }

  return (
    <div>

        <h1>Update Product</h1>
        <form onSubmit={updateProduct}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

            <br/>
            <label>Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>

            <br/>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>



    </div>
  )
}

export default Update