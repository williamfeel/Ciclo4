import { Link } from "react-router-dom";
import styles from "../../styles/Titulo.module.css";
import styles2 from "../../styles/Formulario.module.css";

export const Registro = () => {
  return (
    <div>
      <br />
      <h1 className={styles.titulo}>
        REGISTRATE!
      </h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <form className={styles2.Borde}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    placeholder="ej: Juan David Ariza Torres"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ej: correo@correo.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion" className="font-medium">
                    Direccion
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="form-control"
                    placeholder="ej: Calle 12 #34-56"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono" className="font-medium">
                    Telefono
                  </label>
                  <input
                    type="number"
                    id="telefono"
                    className="form-control"
                    placeholder="ej: 300123456"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="*********"
                  />
                </div>
                <br />
                <input
                  type="submit"
                  value="Ingresar"
                  className="btn btn-primary btn-sm"
                />
                <div className={styles2.Centrar}>
                  <Link to="/" className="badge badge-primary">
                    <div>Ya tengo cuenta.</div>
                  </Link>
                  <Link to="/Password" className="badge badge-secondary">
                    <div>Olvide mi password.</div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <img src={"img/Comic.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
