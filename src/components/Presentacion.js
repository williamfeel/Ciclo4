import { Fragment } from "react";

//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const Presentacion = () => {
  return (
    <Fragment>
      <h1>TIENDA ONLINE</h1>
      <h2>Equipo: 4DEVS</h2>
      <p>Esta es una aplicación desarrollada por estudiantes Mintic - Udea. </p>
      <span>De click en el siguiente botón para continuar</span>
      <br></br>
      <button onClick={Activar}>Ir a la tienda</button>
    </Fragment> 
  );
}

function Activar(){
  alert ("Tienda")
}