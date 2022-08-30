import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Registro() {
  const baseUrl = "http://localhost/sistema-tareas/";
  const [data, setData] = useState([]);

  const [estudianteSeleccionado, setEstudianteSeleccionado]=useState({
    id_est:'',
    nombre_est:'',
    apellido_est:'',
    email_est:'',
    password_est:'',
    paralelo_est:''
  });

  const handleChange=e=>{
    const {name, value} = e.target;
    setEstudianteSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(estudianteSeleccionado);
  }

  const peticionPost=async()=>{
    var f = new FormData();
    f.append("nombre_est", estudianteSeleccionado.nombre_est);
    f.append("apellido_est", estudianteSeleccionado.apellido_est);
    f.append("email_est", estudianteSeleccionado.email_est);
    f.append("password_est", estudianteSeleccionado.password_est);
    f.append("paralelo_est", estudianteSeleccionado.paralelo_est);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
    .then(response=>{
      setData(data.concat(response.data));
    })
   }

  return (
    <div className="container-fluid">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">Registrar</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Nombres</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="nombre_est"
                        autoComplete="name"
                        onChange={handleChange}
                        value={estudianteSeleccionado && estudianteSeleccionado.nombre_est}
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="apellido">Apellidos</label>

                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="apellido_est"
                        autoComplete="apellido"
                        onChange={handleChange}
                        value={estudianteSeleccionado && estudianteSeleccionado.apellido_est}
                      
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email_est"
                        autoComplete="email"
                        onChange={handleChange}
                        value={estudianteSeleccionado && estudianteSeleccionado.email_est}
                      
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>

                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password_est"
                        autoComplete="password"
                        onChange={handleChange}
                        value={estudianteSeleccionado && estudianteSeleccionado.password_est}
                       
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="paralelo">Paralelo</label>
                    <select
                      className="form-control form-select"
                      name="paralelo_est"
                      onChange={handleChange}
                      value={estudianteSeleccionado && estudianteSeleccionado.paralelo_est}
                    >
                      <option selected>Seleccion Paralelo</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>

                  <div className="container input-group mb-3"> </div>

                  <div className="d-grid gap-4">
                    <button type="submit" className="btn btn-primary login" onClick={()=>peticionPost()}>
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
