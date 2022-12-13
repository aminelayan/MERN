import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Hello from './components/Hello';
import Amin from './components/Amin';
import Home from './components/Home';





function App() {
  return (
    <div className="App">
      <Router>
        <Amin path="/:chara"/>
        <Hello path="/"/>
        <Home path="/:chara/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
