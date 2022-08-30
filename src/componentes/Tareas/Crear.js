import React, {useState} from 'react';
import axios from "axios";

function Crear(){
    const baseUrl = "http://localhost/sistema-tareas/";
  const [data, setData] = useState([]);

  const [tareaSeleccionado, setTareaSeleccionado]=useState({
    id_tar:'',
    nombre_tar:'',
    descripcion_tar:''

  });

  const handleChange=e=>{
    const {name, value} = e.target;
    setTareaSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(tareaSeleccionado);
  }

  const peticionPost=async()=>{
    var f = new FormData();
    f.append("nombre_tar", tareaSeleccionado.nombre_tar);
    f.append("descripcion_tar", tareaSeleccionado.descripcion_tar);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
    .then(response=>{
      setData(data.concat(response.data));
    })
   }
    return(
        <div className="container-fluid">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Crear Tarea</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlForr="tarea">Tarea</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="nombre_tar"
                          autoComplete="tarea"
                          onChange={handleChange}
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="descripcion">Descripcion</label>
                      <div className="input-group mb-5">
                        <input
                          type="text"
                          className="form-control"
                          name="descripcion_tar"
                          autoComplete="descripcion"
                          onChange={handleChange}
                          autofocus
                        />
                      </div>
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary login"
                        onClick={()=>peticionPost()}
                      >
                        Guardar
                      </button>
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

export default Crear;