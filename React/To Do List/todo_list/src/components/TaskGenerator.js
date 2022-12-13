import React, { useState } from 'react'

const TaskGenerator = (props) => {
    const [tasks,setTasks]=useState("");
    const [isChecked,SetIsChecked]=useState(false)
    const [newTask,setNewTask]=useState([]);

    const deleteTask =(newTask)=>{
        setTasks(newTask.filter(c=> c.id !== newTask))

      }

      const addNewTask =(newTask)=>{
        setTasks(prevousTasks=> prevousTasks.concat(newTask));
        console.log(newTask);
      };

    const createTask=(e)=>{
        e.preventDefault();
        addNewTask(newTask);
        console.log(tasks);
    }
    const textChangeHandler = event => {
        setTasks(event.target.value);
};

return (
    <div>
<form onSubmit={createTask}>
<input type="text" onChange={textChangeHandler}/>
<input type="submit" value="Add"/>
</form>

<hr></hr>
{newTask.map((tasks,id) => {
        return <div key={id}>
        <label style={isChecked?{textDecorationLine:'line-through'}:{}} key={id}>{tasks}</label>
        <input type="checkbox" checked={isChecked} onChange={e => SetIsChecked(e.target.checked)}/> 
        <button onClick={deleteTask(newTask)}>Delete Task</button>
        </div>;
      })}
    </div>
);
};

export default TaskGenerator