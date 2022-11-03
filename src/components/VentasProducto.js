export function VentasProducto ({vendido}) {
  return (
    <tr>
      <td>{vendido.id}</td>
      <td>{vendido.nombre}</td>
      <td>{vendido.estado}</td>
      <td>{vendido.precio}</td>
      <td>{vendido.cantidad}</td>
    </tr>
  )  

}