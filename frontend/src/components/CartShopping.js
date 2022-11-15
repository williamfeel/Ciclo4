import { useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducers.js";
import { TYPES } from "../actions/cartActions.js";
import datos from "./DatosPrueba.json";
import Card from "react-bootstrap/Card";
import styles from "../styles/ProductoCard.module.css";
import styles2 from "../styles/VentaCard.module.css";

const subtotal = {};

export const CartShopping = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { cart } = state;
  const addToCart = () => dispatch();
  const remFromCart = () => dispatch();

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-8">
          {datos.map((dato) => (
            <div className="mt-4" key={dato.id} dato={dato}>
              <Card className={styles.productoCard}>
                <div className="row">
                  <img
                    className="col-3"
                    src={dato.imagen}
                    alt="img"
                    height={200}
                  />
                  <div className="col-3">{dato.nombre}</div>
                  <div className="col-3">{dato.precio}</div>
                  <div className="col-3">Subotal</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="col-4">
          <br />
          
          <div className="sticky-top">
            <Card> 
              <h3 className={styles2.ventaCard}>Resumen de tu pedido</h3>
              <p className={styles2.ventaTexto}>TOTAL A PAGAR:</p>
              <p className={styles2.ventaTexto}>( # productos)</p>
              <div className="card-footer bg-transparent border-success">
                <div className="row" style={{textAlign: "center"}}>
                  <div className="col-6">
                    <button type="button" className="btn btn-warning">
                      Seguir Comprando
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-success">
                      Proceder a pagar
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
