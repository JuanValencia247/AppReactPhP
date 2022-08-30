import React, { useEffect, useState } from "react";
import axios from "axios";

function Lista() {
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


  return (
    <div className="container-fluid">
      <div className="container pt-5">
        <div className="card">
          <div className="card-header">
            Lista Tareas
            {/* <Link type="button" className="btn btn-success" to={'/crear'}>Agregar Tarea</Link> */}
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tarea</th>
                  <th>Descripcion</th>
                  <th>Fecha Creada</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tareas) => (
                  <tr key={tareas.id_tar}>
                    <td>{tareas.id_tar}</td>
                    <td>{tareas.nombre_tar}</td>
                    <td>{tareas.descripcion_tar}</td>
                    <td>{tareas.fecha_creada_tar}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-info"
                    
                        >
                          Editar
                        </button>
                        <button type="button" className="btn btn-danger">
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lista;
