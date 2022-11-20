import { ListaProductos } from "./components/ListaProductos.js";
import { Presentacion } from "./components/Presentacion";
import { GestionarProducto } from "./components/GestionarProducto.js";
import { Ventas } from "./components/Ventas";
import { Cart } from "./components/Cart";
import { useEffect } from "react"; //borrar luego
import clienteAxios from "./config/axios.jsx"


export function App() {
  
  useEffect(()=>{
    const consultarPrueba = async () => {
        const {data} = await clienteAxios("/productos")
        console.log(data)
    }
    consultarPrueba();
  },[])

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Presentacion
      break;
    case "/Home":
      Component = Presentacion
      break;
    case "/Productos":
      Component = ListaProductos
      break;
    case "/Gestionar":
      Component = GestionarProducto
      break;
    case "/Ventas":
      Component = Ventas
      break;
      case "/Cart":
        Component = Cart
        break;
  
    default:
      break;
  }
  return (
    <>
      <Component/>
    </>
    
  )
}