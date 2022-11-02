import styles from "../styles/ProductoCard.module.css";

export function ProductoCard({dato}){
  return (
  <li className = {styles.productoCard}>
    <div>{dato.nombre}</div>
    <div>{dato.estado}</div>
    <img className={styles.productoImg} src={dato.imagen} alt={dato.nombre}/>
    <div>{dato.precio}</div>
  </li>
  );
}