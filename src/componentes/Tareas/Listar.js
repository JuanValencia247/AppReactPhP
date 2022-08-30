import React, { useState, useEffect } from "react";
import axios from "axios";

function Listar(props) {
  const baseUrl = "http://localhost/sistema-tareas/";
  const [datos, setData] = useState([]);

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
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listar;
