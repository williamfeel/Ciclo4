import styles from "../styles/VentasProducto.module.css";

export function VentasProducto ({vendido}) {
  return (
    <tr className={styles.Grilla}>
      <td>{vendido.id}</td>
      <td>{vendido.nombre}</td>
      <td>{vendido.estado}</td>
      <td>{vendido.precio}</td>
      <td>{vendido.cantidad}</td>
    </tr>
  )  

}