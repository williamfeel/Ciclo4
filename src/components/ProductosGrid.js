import datos from "./DatosPrueba.json"
import { ProductoCard } from "./ProductoCard.js";
import styles from "./styles/ProductosGrid.module.css";
// import { useState } from "react";

export const ProductosGrid =({handleClick}) =>{
  
  return (
    <ul className={styles.productosGrid}>
        {datos.map((dato) =>(
          <ProductoCard key={dato.id} dato={dato} />
        ))
        }
    </ul>
  );
}