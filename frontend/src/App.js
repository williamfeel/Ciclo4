import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ListaProductos } from "./components/productos/ListaProductos.js";
import { Presentacion } from "./components/Presentacion";
import { GestionarProducto } from "./components/productos/GestionarProducto.js";
import { Ventas } from "./components/ventas/Ventas.js";
import { Cart } from "./components/carrito/Cart";

import Inicio from "./Layout/Inicio.js";

export function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route index element={<Presentacion />} />
          <Route path="Home" element={<Presentacion />} />
          <Route path="Productos" element={<ListaProductos />} />
          <Route path="Gestionar" element={<GestionarProducto />} />
          <Route path="Ventas" element={<Ventas />} />
          <Route path="Productos" element={<ListaProductos />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
