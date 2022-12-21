import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {
    const [author,setAuthor]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/')
        .then(res=> setAuthor(res.data));
    },[])
    const removeFromDom = authorID=>{
        setAuthor(author.filter(auth=>auth._id != authorID))
    }
    return (
    <div>
        <Link to ={'/author'}>Add an author</Link>
        <h3>We have quotes by:</h3>
        <table border={2} style={{margin:"auto" , width:"70%"}} >
  <tr>
    <th>Author</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>{props.author.map((tanas,i)=>{
            return <div key={i}>
        <Link to={"/author/"+tanas._id}> {tanas.name}</Link>
        <hr/>
            </div>
        })}</td>
   <td>
    {props.author.map((tanas,i)=>{
            return <div width={"100%"} key={i}>
        <Link to={"/author/edit/"+tanas._id}><button>Edit</button></Link><DeleteButton authorID={tanas._id} sucessCallBack={()=> removeFromDom(tanas._id)}/>
         <hr/>
            </div>
        })}
        </td>
    </tr>
</table>
        
        {/* {props.author.map((tanas,i)=>{
            return <div key={i}>
        <Link to={"/author/"+tanas._id}> {tanas.name}</Link> */}

            {/* </div>
        })} */}



    </div>
)
}

export default AuthorList;