import styles from "./styles/Navbar.module.css";
export const Navbar = () =>{
  return (
    <nav className={styles.Navbar}>
      <a href="/home" className={styles.navlogo}>4-Devs</a>
      <div className={styles.navitems}>        
        <a href="/ProductoCard">Lista de Productos</a>
        <a href="/modificar">Modificar Producto</a>
        <a href="/ventas">Lista de Ventas</a>
      </div>
    </nav>
  );
};
