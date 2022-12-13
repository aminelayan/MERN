import React, { useState } from 'react'

const TODO = () => {
    const [tasks,setTasks]=useState([])
    const [isChecked,SetIsChecked]=useState(false)

    const addNewTask = (sura) => {
        setTasks([...tasks,sura])
        console.log(tasks)
    }

    const textChangeHandler=(e)=>{
        setTasks(e.target.value);
    }

    const createTask =(e)=>{
        e.preventDefault();
        addNewTask(e.target.value);
        console.log(tasks);

    

    }
  return (
    <div>
<form onSubmit={createTask}>
<input type="text" onChange={textChangeHandler}/>
<input type="submit" value="Add"/>
</form>
<hr></hr>
{tasks.map((x,id) => {
        return <div key={id}>
        <label style={isChecked?{textDecorationLine:'line-through'}:{}} key={id}>{x.value}</label>

        </div>;
    })}





    
    </div>
  )
}

export default TODO