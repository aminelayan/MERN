import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Update = () => {
    const { id } = useParams();
    const [author,setAuthor]=useState();
    const [loaded,setLoaded]=useState(false);
    const navigate=useNavigate();

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
        navigate('/')
    }
return (
    <div>
    <Link to={'/'}>Home</Link>
    <p>Edit This Author</p>
    {loaded && (<AuthorForm onSubmitProp={updateAuthor}
    initialName={author.name} />)}
    </div>
)
}

export default Update