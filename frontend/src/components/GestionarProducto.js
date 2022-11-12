import {Navegacion}  from "./Navbar";
import styles from "../styles/App.module.css";
import {Formulario} from "./Formulario.js";
//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const GestionarProducto = () => {
  return (
    <>
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}> Gestionar Producto </h1>
      </header>
      <main>
      <Formulario/>
      </main> 
    </div>
    </>
  );
}
