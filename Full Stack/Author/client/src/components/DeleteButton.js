import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const DeleteButton = (props) => {
    const {authorID, sucessCallBack} = props
    
    const deleteAuthor =e =>{
        axios.delete('http://localhost:8000/api/author/'+authorID)
        .then(res =>{
            sucessCallBack();
            console.log(authorID)
        })
    }
  return (
    <div>
        <button onClick={deleteAuthor}>Delete</button>



    </div>
  )
}

export default DeleteButton