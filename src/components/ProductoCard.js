import styles from "./styles/ProductoCard.module.css";

export function ProductoCard({dato}){
  return (
  <li className = {styles.productoCard}>    
    <p>{dato.estado}</p>
    <img className={styles.productoImg} src={dato.imagen} alt={dato.nombre}/>
    <p>{dato.nombre} - ${dato.precio}</p>
    <button className={styles.boton}>Agregar al carrito</button>
  </li>
  );
}