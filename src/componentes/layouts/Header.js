import React from "react";
import "../../estilos/header.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section id="inicio">
        <div className="contenedor">
          <h1 id="bienvenido">BIENVENIDOS</h1>
          <Link type="button" className="botonInicio" to={"/registro"}>
            Aprende Más
          </Link>
        </div>
      </section>

      <section id="tareas">
        <div className="contenedor">
          <h2>Tareas</h2>
          <div className="misTareas">
            <div className="tar">
              <h3>Php</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quisquam cum deleniti debitis laboriosam illo magnam distinctio?
                Fugiat recusandae aliquam ipsum voluptatum, officiis eius
                doloremque dignissimos reprehenderit tenetur, autem aperiam!
              </p>
              <Link className="crearBtn" to={"/registro"}>
                Informacion
              </Link>
            </div>

            <div className="tar">
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quisquam cum deleniti debitis laboriosam illo magnam distinctio?
                Fugiat recusandae aliquam ipsum voluptatum, officiis eius
                doloremque dignissimos reprehenderit tenetur, autem aperiam!
              </p>
              <Link className="crearBtn" to={"/registro"}>
                Informacion
              </Link>
            </div>

            <div className="tar">
              <h3>Mysql</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quisquam cum deleniti debitis laboriosam illo magnam distinctio?
                Fugiat recusandae aliquam ipsum voluptatum, officiis eius
                doloremque dignissimos reprehenderit tenetur, autem aperiam!
              </p>
              <Link className="crearBtn" to={"/registro"}>
                Informacion
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Header;
