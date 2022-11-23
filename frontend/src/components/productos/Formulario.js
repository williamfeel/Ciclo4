import { useState } from "react";
import clienteAxios from "../../config/axios.jsx";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal.js";
import { useForm } from "react-hook-form";


export function Formulario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const traerProductos = async () => {
      try {
        const { data } = await clienteAxios.get("/productos");
        setProductos(data);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    traerProductos();
  }, []);

  /*  const[objetivo, setObjetivo]=useState([])
  const [nombre, setNombre]=useState('Lunes')
  const [autor, setAutor]=useState('Lunes')
  const [editorial, setEditorial]=useState('Lunes')
  const [disponibles,setDisponibles]=useState('Lunes')
  const [precio,setPrecio]=useState('Lunes')
  const [imagen,setImagen]=useState('Lunes')

  function selectProducto(e) {
    
    setNombre(e.target.value)
    setAutor(e.target.value)
    setEditorial(e.target.value)
    setDisponibles(e.target.value)
    setPrecio(e.target.value)
    setImagen(e.target.value)
  } */

  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid">
      <div className="bg-white">
        <div style={{ textAlign: "center" }}>
          <div>
            <Button type="button" variant="dark" data-bs-toggle="modal"  data-bs-target="#exampleModal">
              AGEGAR UN PRODUCTO A LA BASE DE DATOS
              <img src={"img/add.png"} alt="icono" width={30} height={30} /> 
            </Button>
            <Modal register={register} handleSubmit={handleSubmit}/>
            
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Id</th>
                <th>Nombre</th>
                <th>Autor</th>
                <th>Editorial</th>
                <th>Disp.</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Borrar</th>
                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((pcts) => (
                <tr style={{ textAlign: "center" }} key={pcts._id} pcts={pcts}>
                  <td>{pcts._id}</td>
                  <td>{pcts.nombre}</td>
                  <td>{pcts.autor}</td>
                  <td>{pcts.editorial}</td>
                  <td>#{pcts.disponibles}</td>
                  <td>${pcts.precio}</td>
                  <td>
                    <a href={pcts.imagen.url}>
                      Img
                    </a>
                  </td>
                  <td>
                    <button
                      style={{ border: "none" }}
                      //data-bs-toggle="modal"
                      //data-bs-target={`#id${vendido.factura}`}
                    >
                      <img
                        src={"img/borrar.png"}
                        alt="icono"
                        width={30}
                        height={30}
                      />
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ border: "none" }}
                      //data-bs-toggle="modal"
                      //data-bs-target={`#id${vendido.factura}`}
                    >
                      <img
                        src={"img/editar.png"}
                        alt="icono"
                        width={30}
                        height={30}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
