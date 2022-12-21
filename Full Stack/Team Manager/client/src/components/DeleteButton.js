import axios from 'axios';
import React from 'react'
import { Button } from 'reactstrap';

const DeleteButton = (props) => {
const {playerId,successCallBack}=props;
const deletePlayer = e =>{
    axios.delete('http://localhost:8000/api/teams/'+playerId)
    .then(res =>{
        successCallBack();
        
    })
}
return (
    <div>
    <Button onClick={deletePlayer}>Delete</Button>
    </div>
  )
}

export default DeleteButton