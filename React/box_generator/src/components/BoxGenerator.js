import React, { useState } from 'react';

const BoxGenerator = (props) =>{
  const [colorInput, setColorInput] = useState("");
  const handleColor = (e) => {
    e.preventDefault();
    props.handleColor(colorInput);
    setColorInput("");

  }
  return ( 
    <div>
      <form onSubmit={handleColor}>
    <label>Color:</label>
    <input type="text" onChange={(e)=> setColorInput(e.target.value)} value={colorInput}/>
    <input type="submit" value="Add"/>
      </form>
  </div>
);
}

export default BoxGenerator;