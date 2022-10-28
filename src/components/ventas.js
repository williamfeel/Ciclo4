import datos from "./DatosPrueba.json";
import {VentasProducto} from "./VentasProducto.js";
import styles2 from "./styles/Ventas.module.css";
import styles from "../App.module.css";
import {Navbar}  from "./Navbar";


export const Ventas =() =>{
  
  return (
    <>
    <div>
      <Navbar/>
      <header>
        <h1 className={styles.titulo}>Ventas</h1>
      </header>
      <main>
      <br/>
      <table className={styles2.Tabla}>
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
      </table>
      </main>
    </div>
    
    </>
  );
}
