import { useState } from "react";
import clienteAxios from "../../config/axios.jsx";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { ModalCrear } from "./ModalCrear.js";
import { useForm } from "react-hook-form";
import { ModalEditar } from "./ModalEditar.js";
import { ModalBorrar } from "./ModalBorrar.js";

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
  }, [productos]);

  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid">
      <div className="bg-white">
        <div style={{ textAlign: "center" }}>
          <div>
            <Button
              type="button"
              variant="dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              AGEGAR UN PRODUCTO A LA BASE DE DATOS
              <img src={"img/add.png"} alt="icono" width={30} height={30} />
            </Button>
            <ModalCrear register={register} handleSubmit={handleSubmit} />
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
                  <td>
                    ${new Intl.NumberFormat("en-EN").format(`${pcts.precio}`)}
                  </td>
                  <td>
                    <a href={pcts.imagen.url} target="_blank" rel="noreferrer">
                      Img
                    </a>
                  </td>
                  <td>
                    <div>
                      <Button
                        type="button"
                        variant="secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalDeBorrado"
                        style={{ border: "none" }}
                      >
                        <img
                          src={"img/borrar.png"}
                          alt="icono"
                          width={30}
                          height={30}
                        />
                      </Button>
                    </div>
                    <ModalBorrar idPcto={pcts._id} />
                  </td>
                  <td>
                    <div>
                      <Button
                        type="button"
                        variant="primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#id${pcts._id}`}
                        style={{ border: "none" }}
                      >
                        <img
                          src={"img/editar.png"}
                          alt="icono"
                          width={30}
                          height={30}
                        />
                      </Button>
                    </div>
                    <ModalEditar id={`id${pcts._id}`} pcto={pcts} />
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
