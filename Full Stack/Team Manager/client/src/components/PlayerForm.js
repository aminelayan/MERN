import React, { useState } from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "2rem",margin:"auto" ,marginTop:"2rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%" ,marginTop:"1rem"
    }
}

const PlayerForm = (props) => {
const {initialPlayerName,initialPosition,onSubmitProp}=props;
const [playerName,setName]=useState(initialPlayerName);
const [preferredPosition,setPosition]=useState(initialPosition);

    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp({playerName,preferredPosition})
        setName('');
        setPosition('')
    }

return (
    <div>
    <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
                <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Player Name</InputLabel>
                <OutlinedInput type="text" value={playerName} onChange={(e) => { setName(e.target.value)}} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Postiton</InputLabel>
                <OutlinedInput type="text" value={preferredPosition} onChange={(e) => { setPosition(e.target.value)}} />
                </FormControl>
                <br/>
                <Button type="submit" variant="contained" color="primary">Add</Button>
                </form>
                </Paper>
    </div>
)
}

export default PlayerForm