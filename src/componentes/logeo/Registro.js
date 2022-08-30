import React from "react";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="container-fluid">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">Registrar</div>
              <div className="card-body">
                <form method="POST" action="registrar.php">
                  <div className="form-group">
                    <label for="name">Nombre</label>
                    <div className="input-group mb-3">
                      <input
                        id="formulario"
                        type="text"
                        className="form-control"
                        name="nombre_usu"
                        autocomplete="name"
                        autofocus
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="email">Email</label>

                    <div className="input-group mb-3">
                      <input
                        id="formulario"
                        type="email"
                        className="form-control"
                        name="email_usu"
                        autocomplete="email"
                        autofocus
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="password">Contraseña</label>

                    <div className="input-group mb-3">
                      <input
                        id="formulario"
                        type="password"
                        className="form-control"
                        name="password_usu"
                        autocomplete="password"
                        autofocus
                      />
                    </div>
                  </div>

                  <div className="container input-group mb-3"> </div>

                  <div className="d-grid gap-4">
                    <button type="submit" className="btn btn-primary login">
                      Registrarse
                    </button>
                  </div>

                  <div className="container input-group mb-3"> </div>

                  <div className="container">
                    <div className="form-group input-group mb-3">
                      <div className="d-grid gap-2 input-group mb-3">
                        <span className="color">
                          ¿Ya tengo una cuenta?
                          <Link to="/login">Iniciar Sesion</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
