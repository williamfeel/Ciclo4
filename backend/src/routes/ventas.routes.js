import { Router } from "express";
import {obtenerVentas} from "../controllers/ventas.controller.js"
import {crearVenta} from "../controllers/ventas.controller.js"
//import {actualizarVenta} from "../controllers/products.controller.js"
//import {borrarVenta} from "../controllers/products.controller.js"
//import {obtenerVentaXId} from "../controllers/products.controller.js"

const router = Router();

router.get("/ventas", obtenerVentas);
router.post("/ventas", crearVenta);
//router.put("/ventas/:id", actualizarVenta);
//router.delete("/ventas/:id", borrarVenta);
//router.get("/ventas/:id", obtenerVentaXId);

export default router