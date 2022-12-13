import logo from './logo.svg';
import './App.css';
import Luke from './components/Luke';
import { Router } from '@reach/router';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Luke/>
      <Router>
        <Planets path="/:options/:idpalents"/>
        <People path="/people/:idpeople"/>
      </Router>
    </div>
  );
}

export default App;
