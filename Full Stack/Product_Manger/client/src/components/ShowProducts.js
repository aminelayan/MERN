import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const ShowProducts = (props) => {
const {removeFromDom} = props;
const deleteProduct = (productID) => {
    axios.delete('http://localhost:8000/api/products/' + productID)
    .then(res =>{removeFromDom(productID)})
    .catch(err =>console.error(err))
}
return (
    <div>
        <h3>All Products</h3>
        {props.products.map((products,i) =>{
            return <div key={i}>
        <Link to={"/products/"+products._id}>{products.title}</Link>
        <br/>
        <button onClick={(e) => {deleteProduct(products._id)}}>Delete</button>
        </div>
        })}
    </div>
)
}

export default ShowProducts;