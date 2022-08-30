import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function Editar(){
  
    const baseUrl = "http://localhost/sistema-tareas/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const [editarTareaSeleccionado, setEditarTareaSeleccionado]=useState({
    id_tar:'',
    nombre_tar:'',
    descripcion_tar:''

  });

  const handleChange=e=>{
    const {name, value} = e.target;
    setEditarTareaSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(editarTareaSeleccionado);
  }

  const peticionPut=async()=>{
    var f = new FormData();
    f.append("nombre_tar", editarTareaSeleccionado.nombre_tar);
    f.append("descripcion_tar", editarTareaSeleccionado.descripcion_tar);
    f.append("METHOD", "PUT");
    await axios.post(baseUrl, f, {params: {id: editarTareaSeleccionado.id}})
    .then(response=>{
        var dataNueva=data;
        dataNueva.map(tareas=>{
            if(tareas.id===editarTareaSeleccionado.id){
                editarTareaSeleccionado.nombre_tar=editarTareaSeleccionado.nombre_tar;
                editarTareaSeleccionado.descripcion_tar=editarTareaSeleccionado.descripcion_tar;
            }
        });
      setData(dataNueva);
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
                      <label htmlFor="tarea">Tarea</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="nombre_tar"
                          autoComplete="tarea"
                          onChange={handleChange}
                          value={editarTareaSeleccionado && editarTareaSeleccionado.nombre_tar}
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
                          value={editarTareaSeleccionado && editarTareaSeleccionado.descripcion_tar}
                        />
                      </div>
                    </div>
{/* <Link type="button" className="btn btn-success" to={'/crear'}>Agregar Empleado</Link> */}
                    <div className="d-grid gap-2">
                      <Link
                        type="button"
                        className="btn btn-success"
                        to={'/editar'}
                        onClick={()=>peticionPut()}
                      >
                        
                        Guardar
                      </Link>
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

export default Editar;