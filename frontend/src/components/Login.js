import { Link } from "react-router-dom";
import styles from "../styles/Formulario.module.css";
import styles2 from "../styles/Titulo.module.css"

export const Login = () => {
  return (
    <div>
      <br />
      <h1 className={styles2.titulo}>TIENDA ONLINE COMICS</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className={styles.Borde}>
              {/* {msg && <Alerta alerta={alerta} />} */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="ej: correo@correo.com"
                  /* value={email}
                onChange={(e) => setEmail(e.target.value)} */
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="*********"
                  /* value={password}
                onChange={(e) => setPassword(e.target.value)} */
                />
              </div>
              <br />
              <input
                type="submit"
                value="Ingresar"
                className="btn btn-primary btn-sm"
              />
              <div className={styles.Centrar}>
                <Link to="/Registro" className="badge badge-secondary">
                  No tengo cuenta.
                </Link>
                <Link to="/Password" className="badge badge-secondary">
                  Olvide mi password.
                </Link>
              </div>
              <br />
              <h2 className={styles.Centrar}>4DEVS</h2>
              <p>
                Esta es una aplicación desarrollada por estudiantes Mintic -
                Udea.{" "}
              </p>
              <span>Da click en el siguiente botón para continuar.</span>
              <br></br>
              <Link to="/User" className="btn btn-primary btn-sm">
                Ir a la tienda
              </Link>
            </form>
          </div>
          <div className="col-6">
            <img src={"img/Comic.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
