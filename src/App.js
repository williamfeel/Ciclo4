import { ProductosGrid } from "./components/ProductosGrid";
import styles from "./App.module.css";
import {Navbar}  from "./components/Navbar";

export function App() {
  return (
    <div>
      <Navbar/>
      <header>
        <h1 className={styles.titulo}>Lista de Productos</h1>
      </header>
      <main>
        <ProductosGrid/>
      </main>
    </div>
  )
}