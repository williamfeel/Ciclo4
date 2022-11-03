import styles from "../styles/ProductoCard.module.css";

export function ProductoCard({dato}){
  
  return (
  <li className = {styles.productoCard}>    
    <p>{dato.nombre}</p>
    <img className={styles.productoImg} src={dato.imagen} alt={dato.nombre} width={230} height={345}/>
    <p>{dato.estado} - ${dato.precio}</p>
    <button className={styles.boton} >Agregar al carrito</button>
  </li>
  );
}

