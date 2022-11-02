import {Navbar}  from "./Navbar";
import styles from "../App.module.css";
import styles2 from "../styles/Button.module.css"
import { ProductosGrid } from "./ProductosGrid.js";
//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const ListaProductos = () => {
  return (
    <div>
      <Navbar/>
      <header>
        <h1 className={styles.titulo}>Lista de Productos</h1>
      </header>
      <main>
        <button className={styles2.Button} onClick={Activar}>Nuevo</button>
        <ProductosGrid/>
      </main>
    </div>
  )
}

function Activar(){
  alert ("Nuevo producto")
}
