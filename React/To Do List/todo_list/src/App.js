import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';




function App() {
const[todos,setTodos]=useState([]);

const todoHandler = (todo) =>{
setTodos([...todos,todo])
}

  return (
    <div className="App">
      <Form todos={todoHandler}/>
      <Display todos={todos}/>
    </div>
  );
}

export default App;
