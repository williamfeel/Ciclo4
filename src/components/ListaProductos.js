import { Fragment } from "react";

//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const ListaProductos = () => {
  return (
    <>
    <header>
      <h1>Lista de Productos</h1>
    </header>
    <main>
      <productosGrid/>
    </main>
    </>
  )
}

function Activar(){
  alert ("Tienda")
}