import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand font-weight-bold" to="/">
          <span class="color">SISTEM</span>-TAR
        </Link>
     
          <div className="nav navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-item nav-link" to="/crear">
              Crear Tarea
            </Link>
            <Link className="nav-item nav-link" to="/calificar">
              Calificar Tarea
            </Link>
            <Link className="nav-item nav-link" to="/registro">
              Registrarse
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Iniciar Sesion
            </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
