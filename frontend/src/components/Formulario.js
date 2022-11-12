import { useState } from "react";
import Aviso from "../components/Aviso.js";
import styles from "../styles/Formulario.module.css"
import datos from "./DatosPrueba.json"


export function Formulario() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const options = ["", "En stock", "Agotado"];
  const [estado, setEstado] = useState(options[0]);
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState("");
  
  

  const [alerta, setAlerta] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();

    if ([id, nombre, estado, precio, cantidad, imagen].includes("")) {
      setAlerta({
        msg: "todos lo campos son obligatorios",
        error: true,
      });
      return;
    } else {
      setAlerta({
        msg: "Información enviada exitosamente",
      });
      setId("");
      setNombre("");
      setEstado("");
      setPrecio("");
      setCantidad("");
      setImagen("");
    }
  };

  const { msg } = alerta;

  return (
    <div className="container">   
      <div className="row">
        <div className="col-4">
        <div className={styles.Formulario}>
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className={styles.Centrar} htmlFor="form1" text-justify="center">Buscar por id</label>
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <br/>
        <div>
          <select className="form-select">
            <option>Buscar por nombre</option>
            {datos.map((dato) =>(
              <option key={dato.id} dato={dato}>{dato.nombre}</option>
            ))}
          </select>
        </div>
        </div>
        <div className="col-4">
          <form  className={styles.Formulario} onSubmit={handleSubmit}>
            <fieldset>
              <legend className={styles.Centrar}>Ingrese los datos</legend>
              <div className="contenedor-campos">
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="id">Id: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="id"
                    name="id"
                    placeholder="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="nombre">Nombre: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="estado">Estado: </label>
                  <select className="form-select" aria-label="Default select example" 
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    >
                    {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>))}
                                
                  </select>
                </div>
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="precio">Precio: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="precio"
                    name="precio"
                    placeholder="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="cantidad">Cantidad: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cantidad"
                    name="cantidad"
                    placeholder="cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className={styles.Centrar} htmlFor="img">Imagen url: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="imagen"
                    name="imagen"
                    placeholder="imagen" 
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                  />
                </div>
                
                {/* operador ternario && */}
                {msg && <Aviso alerta={alerta} setAlerta={setAlerta} />}
                <br/>
                <div className="d-grid gap-2">
                  <button type="submit" defaultValue="Modificar" className="btn btn-primary">
                    Modificar
                  </button>
                  <button type="submit" defaultValue="Crear" className="btn btn-primary">
                    Crear
                  </button>
                </div>     
              </div>
            </fieldset>
          </form>
        </div>   
        <div className="col-4">
          <img src={imagen} className="img-fluid" alt="Responsive image"/>        
        </div>
      </div>
  </div>
  );
}
