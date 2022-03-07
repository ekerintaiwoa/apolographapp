import logo from './logo.svg';
import './App.css';
import Characterlist from './pages/Characterlist';
import { Route, Routes } from 'react-router-dom';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">

       <Routes>

         <Route  path='/'    element= { <Characterlist/>}/>
         <Route  path='/:id'    element= { <Character/>}/>
         <Route  path='/search'    element= { <Search/>}/>
    

     </Routes>
    </div>
  );
}

export default App;
