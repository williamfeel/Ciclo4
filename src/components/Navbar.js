import styles from "./styles/Navbar.module.css";

export const Navbar = ({setShow}) =>{
  return (
    <nav className={styles.Navbar}>
      <a href="/home" className={styles.navlogo}>4-Devs</a>
      <div className={styles.navitems}>        
        <a href="/ListaProductos" onClick={()=>setShow(true)}>Lista de Productos</a>
        <a href="/Actualizar">Modificar Producto</a>
        <a href="/ventas">Lista de Ventas</a>
        
        <div className={styles.cart} onClick={()=>setShow(false)}>
          <span>
          <a href="/Cart">

            <i className="fa fa-cart-plus" ></i>
          </a>
            

          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};
