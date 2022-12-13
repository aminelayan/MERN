import axios from 'axios';
import React ,{useEffect,useState}from 'react'

const Planets = (props) => {
    const [people, setPeople] = useState([]);
    useEffect(( ) => {
        axios.get('https://swapi.dev/api/planets/'+props.idpalents)
            .then(response => setPeople(response.data))
    }, [props.idpalents]);
 
    return (
        <div>
    <h3>Name :{people.name}</h3> 
    <p>Climtate :{people.climate} </p>
    <p>Terrain :{people.terrain} </p>
    <p>Surface Water :{people.surface_water}</p>
    <p>Population :{people.population}</p>
        </div>
    );
}

export default Planets