import { ListaProductos } from "./components/ListaProductos.js";
import { Presentacion } from "./components/Presentacion";
import { GestionarProducto } from "./components/GestionarProducto.js";
import { Ventas } from "./components/Ventas";
import { Cart } from "./components/Cart";


export function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Presentacion
      break;
    case "/home":
      Component = Presentacion
      break;
    case "/productos":
      Component = ListaProductos
      break;
    case "/Gestionar":
      Component = GestionarProducto
      break;
    case "/ventas":
      Component = Ventas
      break;
      case "/Cart":
        Component = Cart
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