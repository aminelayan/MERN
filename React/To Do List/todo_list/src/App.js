import { useState } from 'react';
import './App.css';
import TaskGenerator from './components/TaskGenerator';
import TODO from './components/TODO';



function App() {
const addNewTask =(newTask)=>{
  setNewTask(prevousTasks=> prevousTasks.concat(newTask));
  console.log(newTask);
};
const del =(newTask)=>{
  setNewTask(prevousTasks=> prevousTasks.concat(newTask));
  console.log(newTask);
};
  
  return (
    <div className="App">
      <TaskGenerator/>
    </div>
  );
}

export default App;
