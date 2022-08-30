import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './componentes/layouts/Nav';
import Header from './componentes/layouts/Header';
import Crear from './componentes/Tareas/Crear';
import Calificar from './componentes/Tareas/Calificar';
import Registro from './componentes/logeo/Registro';
import Login from './componentes/logeo/Login';

function App() {
  return (
    <Router>
    <Nav></Nav>
    <Routes>
        <Route exact path='/'  element={<Header/>} ></Route>
        <Route path='/crear' element={<Crear/>} ></Route>
        <Route path='/calificar' element={<Calificar/>} ></Route>
        <Route path='/registro' element={<Registro/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
      </Routes>
      
    <div className='container-fluid'>
      </div>
    </Router>
    
  );
}

export default App;
