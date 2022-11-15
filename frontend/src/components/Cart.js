import {Navegacion}  from "./Navbar.js";
import styles from "../styles/App.module.css";
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { CartShopping } from "./CartShopping.js";

//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const Cart = () => {
  return (
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}> Tu Carro De Compras</h1>
      </header>
      <main>
        <CartShopping/>
      </main>
    </div>
  );
}
