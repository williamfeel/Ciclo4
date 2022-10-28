import { ProductosGrid } from "./components/ProductosGrid";
import styles from "./App.module.css";
import {Navbar}  from "./components/Navbar";
import { Presentacion } from "./components/Presentacion";
import { Modificar } from "./components/modificar";
import ventas from "./components/ventas";


export function App() {
  let Component;
  switch (window.location.pathname) {
    case "/home":
      Component = Presentacion
      break;
    case "/ProductoCard":
      Component = ProductosGrid
      break;
    case "/modificar":
      Component = Modificar
      break;
    case "/ventas":
      Component = ventas
      break;
  
    default:
      break;
  }
  return (
    <div>
      <Navbar/>
      
      <header>
        <h1 className={styles.titulo}>Lista de Productos</h1>
      </header>
      <main>
      <Component/>
        {/* <ProductosGrid/> */}
      </main>
    </div>
  )
}