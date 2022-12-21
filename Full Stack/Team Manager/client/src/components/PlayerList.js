import React from 'react'
import {Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from './DeleteButton';
const PlayerList = (props) => {

  const styles ={
    td:{
      align:"center"
    },
    Table:{
      margin:"auto",
      width:"80%",
      marginTop:"2rem",
      marginBottom:"1rem"

    }
  }

  
  const {removeFromDom} = props;

  return (
    <div>

        <Table
  bordered
  hover
  responsive
  size="sm"
  striped
  style={styles.Table}
>
  <thead>
    <tr>
      <th align='center'>
      Player Name
      </th>
      <th align='center'>
      Position
      </th>
      <th align='center'>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
  {props.player.map( (person, i) =>(
  <tr key={i}>
    <td>{person.playerName}</td>
    <td>{person.preferredPosition}</td>
    <td ><DeleteButton playerId={person._id} successCallBack={()=>removeFromDom(person._id)} /></td>

    </tr>
  ))}
 

    
    
  </tbody>
</Table>
    </div>
  )
}

export default PlayerList