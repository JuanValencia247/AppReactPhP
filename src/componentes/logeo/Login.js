import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-group mb-3">
                        <input
     
                          type="email"
                          className="form-control"
                          name="email_adm"
                          autoComplete="email"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Contraseña</label>
                      <div className="input-group mb-5">
                        <input
          
                          type="password"
                          className="form-control"
                          name="password_adm"
                          autoComplete="password"
          
                        />
                      </div>
                    </div>

                    <div className="d-grid gap-2">
                      <button
    
                        type="submit"
                        className="btn btn-primary login"
                      >
                        Iniciar Sesion
                      </button>
                    </div>

                    <div className="container input-group mb-3"> </div>

                    <div className="container">
                      <div className="form-group input-group mb-3">
                        <div className="d-grid gap-2 input-group mb-3">
                          <span className="color">
                            ¿No tienes una cuenta?
                            <Link to="/registro">Registarse</Link>
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
    </>
  );
}

export default Login;
