import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AuthorList = (props) => {
    return (
    <div>
        {props.author.map((tanas,i)=>{
            return <div key={i}>
        <Link to={"/author/"+tanas._id}> {tanas.name}</Link>

            </div>
        })}



    </div>
)
}

export default AuthorList;