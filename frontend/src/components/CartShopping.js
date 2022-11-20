import datos from "./DatosPrueba.json";
import Card from "react-bootstrap/Card";

import styles2 from "../styles/VentaCard.module.css";
import { CartItem } from "./CartItem.js";

export const CartShopping = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-8">
          {datos.map((dato) => (
            <CartItem key={dato.id} producto={dato} />
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
                <div className="row" style={{ textAlign: "center" }}>
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
