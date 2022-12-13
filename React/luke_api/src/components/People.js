import axios from 'axios';
import React ,{useEffect,useState}from 'react'

const People = (props) => {
    const [people, setPeople] = useState([]);
    useEffect(( ) => {
        axios.get('https://swapi.dev/api/people/'+props.idpeople)
            .then(response => setPeople(response.data))
            console.log('https://swapi.dev/api/'+props.options+'/'+props.idpalents)
            console.log(people)
    }, [props.idpeople]);
 
    return (
        <div>
    <h3>Name :{people.name}</h3> 
    <p>Height :{people.height} cm</p>
    <p>Mass :{people.mass} kg</p>
    <p>Hair Color :{people.hair_color}</p>
    <p>Skin Color :{people.skin_color}</p>
        </div>
    );
}

export default People