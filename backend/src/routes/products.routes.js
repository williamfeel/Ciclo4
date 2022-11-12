import { Router } from "express";
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  borrarProducto,
  obtenerProductoXId
} from "../controllers/products.controller.js"


const router = Router();

router.get("/productos", obtenerProductos);
router.post("/productos", crearProducto);
router.put("/productos/:id", actualizarProducto);
router.delete("/productos/:id", borrarProducto);
router.get("/productos/:id", obtenerProductoXId);

export default router