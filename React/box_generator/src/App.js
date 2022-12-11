
import { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxGenerator from './components/BoxGenerator';


function App() {
  const [color,setColor]  = useState([])
  const newColor=(tanas)=>{
    setColor(color.concat(tanas));

  }
  return (
    <div className="App">
      <BoxGenerator handleColor={newColor}/>
      <BoxDisplay colors= {color}/>
    </div>
  );
}

export default App;
