import { navigate } from '@reach/router';
import axios from 'axios';
import React ,{useEffect,useState} from 'react'

const Luke = () => {
    const inputType=["people","planets"];
    const [types, setType] = useState(inputType[0]);
    const [id, setID] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/'+types+'/'+id)
    }

    return (
        <>
        <div>
        <form  onSubmit={handleSubmit} >
            <label>Search for :</label>
            <select value={types} onChange={e=> setType(e.target.value)} >
            {inputType.map((type,index)=>{
                return (<option value={type} key={index}> {type} </option>)
            })}
            </select>
            <br></br>
            <label>ID</label>
            <input type="number" onChange={e=> setID(e.target.value)}/>
            <input type="submit"/>
        </form>



        </div>
        <div>
        </div>
        </>
    );
}

export default Luke