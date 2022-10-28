import { ListaProductos } from "./components/ListaProductos.js";
import { Presentacion } from "./components/Presentacion";
import { ModificarProducto } from "./components/ModificarProducto.js";
import { Ventas } from "./components/Ventas";


export function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Presentacion
      break;
    case "/home":
      Component = Presentacion
      break;
    case "/ListaProductos":
      Component = ListaProductos
      break;
    case "/Actualizar":
      Component = ModificarProducto
      break;
    case "/ventas":
      Component = Ventas
      break;
  
    default:
      break;
  }
  return (
    <div>
      
      <Component/>
        {/* <ProductosGrid/> */}
      
    </div>
  )
}