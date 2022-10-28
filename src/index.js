import React from "react";
import ReactDOM from "react-dom/client";


import "./estilos.css";
// import {ProductosGrid} from "./components/ProductosGrid.js";
// import {Presentacion} from "./components/Presentacion.js";
import {App} from "./App";



//Renderización 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)