import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


function Tanas(props) {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
  const [txt,setText] = useState("");
  const [messages,setMessages]= useState([]);

  useEffect(() => {
    socket.on("Tanas", data => console.log(data));
    socket.on("Tanas",data => setMessages([...messages,data]))

  });

const onSubmitHandler = e =>{
  e.preventDefault()
  socket.emit("Tanas",props.username+" : "+txt)
  setText("")
}
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}> 
      <input type="text" value={txt} onChange={e => setText(e.target.value)}/>
      <input type="submit" value="send" />
      </form>
      {messages.map((mes,i)=><li key={i}>{mes}</li>)}
    </div>
    
);
}

export default Tanas;
