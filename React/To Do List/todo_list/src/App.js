import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';




function App() {
const[todos,setTodos]=useState([]);

const todoHandler = (todo) =>{
setTodos([...todos,todo])
}

const deleteTask= task =>{
  setTodos(todos.filter((todos=>todos!=task)))
}
const updateTask = task =>{
  const tanas = todos.filter((todos=>todos == task))
  tanas[0].completed =!tanas[0].completed
  setTodos([...todos])
}
  return (
    <div className="App">
      <Form todos={todoHandler}/>
      <Display todos={todos} deleteTask={deleteTask} updateTask= {updateTask}/>
    </div>
  );
}

export default App;
