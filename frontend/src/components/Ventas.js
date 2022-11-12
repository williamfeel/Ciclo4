import Table from 'react-bootstrap/Table';
import datosVentas from "./DatosPruebaVentas.json";
import {VentasProducto} from "./VentasProducto.js";
import styles from "../styles/App.module.css";
import {Navegacion}  from "./Navbar";
import { Container } from 'react-bootstrap';


export const Ventas =() =>{
  
  return (
    <>
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}>Ventas</h1>
      </header>
      <main>
      <Container className="bg-white">
        <Table striped bordered hover size="sm">
        <thead>
          <tr style={{textAlign: "center"}}>
            <th>Fecha</th>
            <th>No. de Factura</th>
            <th>Valor Total</th>  
          </tr>
        </thead>
        <tbody>
          {datosVentas.map((vendido)=>(
              <VentasProducto key={vendido.factura} vendido={vendido}/>
          ))}
        </tbody>
        </Table>
      </Container>
      </main>
    </div>
    </>
  );
}

