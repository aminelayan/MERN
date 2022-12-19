import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = (props) => {
    const [product,setProdcut] = useState ({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => setProdcut(res.data))
        .catch(err =>console.error(err))
    },[]);
return (
    <div>
    <p>Title : {product.title}</p>
    <p>Price : {product.price}</p>
    <p>Description : {product.description}</p>
    <Link to={"/products/"+product._id+"/edit"}>Edit</Link>
    </div>
)
}

export default Detail;