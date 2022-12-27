import logo from './logo.svg';
import './App.css';

import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Update from './views/Update';
import Display from './views/Display';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Main/>} path="/new" />
      <Route element={<Update/>} path="/edit/:id"/>
      <Route element={<Display/>} path="/"/>
      </Routes>
      
    </div>
  );
}

export default App;
