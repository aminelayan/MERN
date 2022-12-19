import React, { useState } from 'react'
import axios from 'axios';



const ProductForm = (props) => {
    const {initialTitle,initialPrice,initialDescription,onSubmitProp}=props;
    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description,setDescription] = useState(initialDescription);

    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp({title,price,description})
        // axios.post('http://localhost:8000/api/products',{
        //     title,
        //     price,
        //     description
        // })
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))
    };

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input type="text" onChange={e=> setTitle(e.target.value)} value={title}/>
            <br/>
            <label>Price</label>
            <input type="number" onChange={e=> setPrice(e.target.value)} value={price}/>
            <br/>
            <label>Description</label>
            <input type="text" onChange={e=> setDescription(e.target.value)} value={description}/>
            <br/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default ProductForm