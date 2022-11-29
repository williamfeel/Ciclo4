import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ListaProductos } from "./components/productos/ListaProductos.js";
import { Presentacion } from "./components/Presentacion";
import { GestionarProducto } from "./components/productos/GestionarProducto.js";
import { Ventas } from "./components/ventas/Ventas.js";

//Usuarios
import { Registro } from "./components/Usuarios/Registro.js";
import {OlvidePassword} from "./components/Usuarios/OlvidePassword.js";
import Confirmar from "./components/Usuarios/Confirmar.js";
//Inicio
import { Login } from "./components/Login.js";

import { Cart } from "./components/carrito/Cart";
import Inicio from "./Layout/Inicio.js";
import { CartProvider } from "./components/context/CartProvider.js";

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {/* Rutas Públicas */}
        <Routes>
          <Route path="/" element={<Inicio />}>
            <Route index element={<Login />} />
            <Route path="Registro" element={<Registro />} />
            <Route path="Password" element={<OlvidePassword />} />
            <Route path="Confirmar/:id" element={<Confirmar />} />
          </Route>
          {/* Rutas Protegidas */}
          {/* Rutas de Perfil */}
          {/* <Route path="/Perfil" element={<RutaProtegida />}>
            <Route index element={<Perfil />} />
            <Route path="cambiar-password" element={<CambiarPassword />} />
          </Route> */}
          {/* Rutas del Administrador */}
          <Route path="/Admin" element={<GestionarProducto />}>
            <Route index element={<GestionarProducto />} />
            {/* <Route path="Home" element={<Presentacion />} /> */}
            {/* <Route path="Gestionar" element={<GestionarProducto />} /> */}
            <Route path="Ventas" element={<Ventas />} />
            {/* <Route path="Productos" element={<ListaProductos />} /> */}
            {/* <Route path="Cart" element={<Cart />} /> */}
          </Route>
          {/* Rutas del Usuario */}
          <Route path="/User" element={<ListaProductos />}>
            <Route index element={<ListaProductos />} />
            {/* <Route path="Home" element={<Presentacion />} /> */}
            {/* <Route path="Productos" element={<ListaProductos />} /> */}
            {/* <Route path="Gestionar" element={<GestionarProducto />} /> */}
            {/* <Route path="Ventas" element={<Ventas />} /> */}
            {/* <Route path="Productos" element={<ListaProductos />} /> */}
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
