import React from "react";
import styles from "../styles/Aviso.module.css"

const Aviso = ({alerta, setAlerta}) => {
  setTimeout (()=>{
    setAlerta({});
  }, 3000)  
  return(
    <div className = {`${alerta.error ? styles.error : styles.correcto}`}>
      {alerta.msg}
    </div>
  )
}

export default Aviso