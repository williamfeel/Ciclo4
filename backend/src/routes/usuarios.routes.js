import { Router } from "express";
import {
  registrar,
  confirmar,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/user", registrar);
router.get("/user/confirmar/:token", confirmar);

export default router