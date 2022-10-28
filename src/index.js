import React from "react";
import ReactDOM from "react-dom/client";


import "./estilos.css";
import {ProductosGrid} from "./components/ProductosGrid.js";
import {Presentacion} from "./components/Presentacion.js";
import {ListaProductos} from "./components/ListaProductos.js";
import {Ventas} from "./components/Ventas.js";
import {ModificarProducto} from "./components/ModificarProducto.js";



//Renderización 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ventas/>
  </React.StrictMode>
)