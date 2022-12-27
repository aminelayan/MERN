import { Button } from '@material-ui/core'
import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {
    const {author,fun}=props
    const deleteAuthor = e =>{
        axios.delete('http://localhost:8000/api/'+author)
        .then(res=>fun())
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <Button onClick={deleteAuthor}>Delete</Button>
    </div>
  )
}

export default DeleteButton