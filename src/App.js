import './App.css';
import ListTask from './ListTask';
import { Routes,Route, Link } from 'react-router-dom';
import Add from './AddTask';

import Search from './Search';
import Edit from './Edit';





function App() {
  return (
    <div className="App">
    <Routes>
   <Route   path='/' element={<><Search/>  <Link to={"/add"}><button>ADD</button></Link><ListTask/></>} />
   
   <Route  path='/add'  element={<Add/>}/>
   <Route  path='/edit/:id'  element={<Edit/>}/>
   </Routes>
    </div>
  );
}

export default App;