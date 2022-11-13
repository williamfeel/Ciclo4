import { Router } from "express";
import {
  obtenerVentas, 
  crearVenta, 
  actualizarVenta,
  obtenerVentaXId
} from "../controllers/ventas.controller.js"

const router = Router();

router.get("/ventas", obtenerVentas);
router.post("/ventas", crearVenta);
router.put("/ventas/:id", actualizarVenta);
router.get("/ventas/:id", obtenerVentaXId);

export default router