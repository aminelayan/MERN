import React, { useState } from 'react'
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  paper: {
      width: "20rem", padding: "1rem",margin:"auto" ,marginTop:"2rem",
  },
  input: {
      marginBottom: "2rem"
  },
  button: {
      width: "100%" , marginLeft:"2rem"
  }
}

const AuthorForm = (props) => {
    const {initialName,onSubmitProp}=props
    const [name,setName] = useState(initialName)
    const navigate=useNavigate();

    const onSubmitHandler = e =>{
      e.preventDefault();
        onSubmitProp({name});
        navigate('/')

    }
  return (
    <div>
      <Paper elevation={3} style={styles.paper}>
        <form onSubmit={onSubmitHandler}>
        <FormControl variant="outlined" style={styles.input}>
        <InputLabel>Name:</InputLabel>
        <OutlinedInput type="text" value={name} onChange={e => setName(e.target.value)}/>
        </FormControl>
        <br/>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
        <Button href='/' variant="contained" color="primary">Cancel</Button>
        </form>
</Paper>

    </div>
  )
}

export default AuthorForm;