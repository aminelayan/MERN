// import React, { useState } from 'react'

// const TaskDisplay = (props) => {
// const [isChecked,SetIsChecked]=useState(false)
// const [newTask,setNewTask]=useState([]);


// const deleteTask =(newTask)=>{
//   setNewTask(prevousTasks=> prevousTasks.splice(0,newTask));
//   console.log(newTask);
// }

//   return (
//     <div>
//       {props.tasks.map((tasks,id) => {
//         return <div>
//         <label style={isChecked?{textDecorationLine:'line-through'}:{}} key={id}>{tasks}</label>
//         <input type="checkbox" checked={isChecked} onChange={e => SetIsChecked(e.target.checked)}/> 
//         <button onClick={deleteTask(tasks)}>Delete Task</button>
//         </div>;
//       })}
//     </div>
//   )
// }

// export default TaskDisplay