import Table from 'react-bootstrap/Table';
export const Modal = ({factura, detalle, NoFactura}) => {
  return(
    <div>
      <div className="modal fade" id={factura} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Factura No. {NoFactura}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Table>
                <thead>
                  <tr style={{textAlign: "center"}}>
                    <th>id Pto</th>
                    <th>nombre</th>
                    <th>cantidad</th>  
                    <th>subtotal</th>
                  </tr>
                </thead>
                <tbody>
                {detalle.map((detal)=>(
                  <tr key={detal.subtotal}>
                    <td>{detal.idProducto}</td>
                    <td>{detal.nombre}</td>
                    <td>{detal.cantidadVta}</td>
                    <td>{detal.subtotal}</td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ModalE = () => {

}