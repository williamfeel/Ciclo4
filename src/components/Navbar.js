import styles from "./styles/Navbar.module.css";
export const Navbar = () =>{
  return (
    <div className={styles.Navbar}>
      <span className={styles.navlogo}>4-Devs</span>
      <div className={styles.navitems}>
        <a href="/home">Home</a>
        <a href="/productos">Lista de Productos</a>
        <a href="/modificar">Modificar Producto</a>
        <a href="/ventas">Lista de Ventas</a>
      </div>
    </div>
  );
};
