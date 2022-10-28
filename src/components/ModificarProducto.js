import {Navbar}  from "./Navbar";
import styles from "./styles/App.module.css";
import { ProductoUpdate } from "./ProductoUpdate.js";
//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const ModificarProducto = () => {
  return (
    <div>
      <Navbar/>
      <header>
        <h1 className={styles.titulo}>Modificar Producto</h1>
      </header>
      <main>
        <ProductoUpdate/>
      </main>
    </div>
  )
}