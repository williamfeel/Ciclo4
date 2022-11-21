import styles2 from "../../styles/VentaCard.module.css";
import styles from "../../styles/ProductoCard.module.css";
import Card from "react-bootstrap/Card";

export const CartItem = ({ producto, addToCart, remFromCart }) => {

  let {id} = producto;

  return (
    <div className="mt-4">
      <Card className={styles.productoCard}>
        <div className="row">
          <img className="col-3" src={producto.imagen} alt="img" height={200} />
          <div className="col-3">
            <div className={styles2.ventaTexto2}>
              <br />
              {producto.nombre} <br /> ${producto.precio} <br />
              en stock: {producto.disponibles} <br /> {producto.editorial}{" "}
              <br /> {producto.autor}
            </div>
          </div>
          <div className="col-3">
            <div className={styles2.ventaTexto2}>
              <br />
              Cantidad
              <br />
              <input type="number" min="0" max="100"></input>
              <button type="button" className="btn btn-warning btn-sm" onClick={()=>addToCart(id)}>Actualizar</button>
              <br />
              <br />
              <button onClick={()=>remFromCart(id)}>Eliminar del Carrito</button>
            </div>
          </div>
          <div className="col-3">
            <div className={styles2.ventaTexto2}><br />Subotal</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
