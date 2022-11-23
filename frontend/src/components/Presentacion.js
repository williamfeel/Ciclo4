import { Navegacion } from "./Navbar.js";
import styles from "../styles/App.module.css";


//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const Presentacion = () => {
  return (
    <div>
      <Navegacion />
      <header>
        <h1 className={styles.titulo}> Presentacion </h1>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <br/>
              <br/>
              <h1>TIENDA ONLINE</h1>
              <h2>Equipo: 4DEVS</h2>
              <p>
                Esta es una aplicación desarrollada por estudiantes Mintic -
                Udea.{" "}
              </p>
              <span>De click en el siguiente botón para continuar</span>
              <br></br>
              <a href="/Productos" className="btn btn-primary btn-sm">
                Ir a la tienda
              </a>
            </div>
            <div className="col-8">
             <img src={"img/Comic.png"} alt="img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
