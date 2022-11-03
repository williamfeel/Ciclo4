import Table from 'react-bootstrap/Table';
import datos from "./DatosPrueba.json";
import {VentasProducto} from "./VentasProducto.js";
import styles from "../styles/App.module.css";
import {Navegacion}  from "./Navbar";
import { Container } from 'react-bootstrap';
import styles2 from "../styles/Ventas.module.css";

export const Ventas =() =>{
  
  return (
    <>
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}>Ventas</h1>
      </header>
      <main>
      <br/>
      <Container className={styles2.tabla}>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Cantidad</th>  
          </tr>
        </thead>
        <tbody>
          {datos.map((vendido)=>(
              <VentasProducto key={vendido.id} vendido={vendido}/>
          ))}
        </tbody>
      </Table>
    </Container>
      </main>
    </div>
    
    </>
  );
}

