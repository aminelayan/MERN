import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerForm from '../components/PlayerForm'
import PlayerList from '../components/PlayerList'
const Main = () => {
    const [players,setPlayer]=useState([])
    const [loaded,setLoaded]=useState(false)
    const [errors, setErrors] = useState([]); 
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/teams')
        .then(res =>{setPlayer(res.data)
                setLoaded(true)
        })
        
    },[])

    const removeFromDom = playerId=> {
        setPlayer(players.filter(players=>players._id != playerId))
      }

    const createPlayer = player =>{
        axios.post('http://localhost:8000/api/teams',player)
        .then(res =>setPlayer(players.concat(res.data)))
            // {setPlayer([...players,res.data])})
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })            
    }
  return (
    <div>
        <PlayerForm onSubmitProp = {createPlayer} initialPlayerName="" initialPosition="" errors={errors}/>
        {loaded && <PlayerList player ={players} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main