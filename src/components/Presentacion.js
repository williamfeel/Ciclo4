import {Navegacion}  from "./Navbar.js";
import styles from "../styles/App.module.css";

//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const Presentacion = () => {
  return (
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}> Presentacion </h1>
      </header>
      <main>
      
        <h1>TIENDA ONLINE</h1>
        <h2>Equipo: 4DEVS</h2>
        <p>Esta es una aplicación desarrollada por estudiantes Mintic - Udea. </p>
        <span>De click en el siguiente botón para continuar</span>
        <br></br>
        <a href="/ListaProductos" className="btn btn-primary btn-sm">Ir a la tienda</a>
      </main>
    </div>
  );
}

