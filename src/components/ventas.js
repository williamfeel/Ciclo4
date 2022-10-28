import datos from "./DatosPrueba.json";
import {VentasProducto} from "./VentasProducto.js";
import styles from "./styles/Ventas.module.css";
import stylesTitulo from "./styles/Titulo.module.css";
import {Navbar}  from "./Navbar";


export const Ventas =() =>{
  console.log(datos);
  return (
    <>
    <div>
      <Navbar/>
      <header>
        <h1 className={stylesTitulo.titulo}>Ventas</h1>
      </header>
      <main>
      <br/>
      <table className={styles.Tabla}>
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