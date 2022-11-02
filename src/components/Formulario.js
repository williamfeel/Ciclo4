import { useState } from "react"
import styles from "../styles/Formulario.module.css";

export function Formulario(){
  const[nombre, setNombre]=useState("");
  const[id, setId]=useState("");
  const[estado, setEstado]=useState("");
  const[precio, setPrecio]=useState("");
  const[cantidad, setCantidad]=useState("");
  const[img, setImg]=useState([]);
  
  return (
    <div>
      <form className={styles.Formulario}>
        <label htmlFor="id">Id: </label>
            <input
              type="text"
              id="id"
              name="id"
              value={id} 
              onChange ={(e)=>setId(e.target.value)}
            />
        <br/> 
        <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre} 
            onChange ={(e)=>setNombre(e.target.value)}
          />
        <br/> 
        <label htmlFor="estado">Estado: </label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={estado} 
            onChange ={(e)=>setEstado(e.target.value)}
          />
        <br/> 
        <label htmlFor="precio">Precio: </label>
          <input
            type="text"
            id="precio"
            name="precio"
            value={precio} 
            onChange ={(e)=>setPrecio(e.target.value)}
          />
        <br/> 
        <label htmlFor="cantidad">Cantidad: </label>
          <input
            type="text"
            id="cantidad"
            name="cantidad"
            value={cantidad} 
            onChange ={(e)=>setCantidad(e.target.value)}
          />  
        <br/> 
        <label htmlFor="img">Imagen: </label>
          <input
            type="file"
            multiple accept="img/*"
            value={img}
            onChange ={(e)=>setImg(e.target.files[0])}
          />  
        <br/>
        <button>Modificar</button>
      </form>
    </div>
  )
}