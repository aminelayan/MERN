import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import AllAuthor from './views/AllAuthor';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={ <Main/>} path="/author"/>
      <Route element={ <AllAuthor/>} path="/"/>
      <Route element={<Details/>} path="/author/:id"/>


      </Routes>
      
    </div>
  );
}

export default App;
