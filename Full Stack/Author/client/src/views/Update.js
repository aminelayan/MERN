import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';

const Update = () => {
    const {id} =props;
    const [author,setAuthor]=useState();
    const [loaded,setLoaded]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
        .then(res=> {
            setAuthor(res.data)
            setLoaded(true);
        })
    },[]);

    const updateAuthor = author=>{
        axios.put('http://localhost:8000/api/author/'+id,author)
        .then(res =>console.log(res))
    }
return (
    <div>

    {loaded && <AuthorForm
    




    </div>
)
}

export default Update