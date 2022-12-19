import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/ProductForm';
import ShowProducts from '../components/ShowProducts';
const Main =(props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
    })
        .catch(err => console.log(err));
        },[]);

        const removeFromDom = personId =>{
            setProducts(products.filter(product => product._id !== personId))
        }
        const createProduct = product =>{ axios.post('http://localhost:8000/api/products',product)
        .then(res=>{
                setProducts([...products,res.data])
        })
        }

        return(
        <div>
        <PersonForm onSubmitProp = {createProduct} initialTitle="" initialPrice="" initialDescription=""/>
        <hr/>
        {loaded && <ShowProducts products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
    }
    export default Main;
