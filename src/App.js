import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './componentes/layouts/Nav';
import Header from './componentes/layouts/Header';
import Crear from './componentes/Tareas/Crear';
import Registro from './componentes/logeo/Registro';
import Login from './componentes/logeo/Login';
import Listar from './componentes/Tareas/Listar';
// import Editar from './componentes/Tareas/Editar';

function App() {
  return (
    <Router>
    <Nav></Nav>
    <Routes>
        <Route exact path='/'  element={<Header/>} ></Route>
        <Route path='/crear' element={<Crear/>} ></Route>
        <Route path='/listar' element={<Listar/>}></Route>
        <Route path='/registro' element={<Registro/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        {/* <Route path='/editar' element={<Editar/>} ></Route> */}
      </Routes>
      
    <div className='container-fluid'>
   
      </div>
    </Router>
    
  );
}

export default App;
