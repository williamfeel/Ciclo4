import styles from "../../styles/Formulario.module.css";
import { Button } from "react-bootstrap";
import clienteAxios from "../../config/axios";



export const ModalBorrar = ({ idPcto }) => {


  const borrarProducto = async (id) => {
    console.log(id)
    try {
      await clienteAxios.delete(`/productos/${id}`);
      
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div>
      <div
        className="modal fade"
        id="ModalDeBorrado"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className={styles.Formulario}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Eliminando pto de la base de datos...
                </h1>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Estas seguro?</p>
              <p>Estas accion no se podra revertir!</p>
              <span className={styles.Botones}>
                <Button
                  type="button"
                  variant="primary"
                  style={{ border: "none" }}
                >
                  Canelar
                </Button>
              </span>
              <span>
                <Button
                  type="button"
                  variant="warning"
                  style={{ border: "none" }}
                  onClick={()=>borrarProducto(idPcto)}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Confirmar
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
