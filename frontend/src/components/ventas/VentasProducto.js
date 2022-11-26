import { Modal } from "./Modal";

export function VentasProducto({ vendido }) {
  return (
    <tr style={{ textAlign: "right" }}>
      <td>{vendido.fecha}</td>
      <td>{vendido.factura}</td>
      <td>{vendido.total}</td>
      <td style={{ textAlign: "center" }}>
        <button
          style={{ border: "none" }}
          data-bs-toggle="modal"
          data-bs-target={`#id${vendido.factura}`}
        >
          <img src={"img/LogoFac.png"} alt="icono" width={30} height={30} />
        </button>
        <Modal
          factura={`id${vendido.factura}`}
          detalle={vendido.detalle}
          NoFactura={vendido.factura}
        ></Modal>
      </td>
    </tr>
  );
}
