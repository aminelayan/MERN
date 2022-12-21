import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import AllAuthor from './views/AllAuthor';
import Details from './views/Details';
import Update from './views/Update';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route element={ <Main/>} path="/author"/>
      <Route element={ <AllAuthor/>} path="/"/>
      <Route element={<Details/>} path="/author/:id"/>
      <Route element= {<Update/>} path ='/author/edit/:id'/>
      </Routes>
      
    </div>
  );
}

export default App;
