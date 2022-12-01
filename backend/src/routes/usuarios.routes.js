import { Router } from "express";
import {
  registrar,
  confirmar,
  auntenticar,
  perfil,
  olvidePassword,
  comprobarToken,
  actualizarPerfil,
  usuarioRegistrados,
  actualizarPassword,
  nuevoPassword


} from "../controllers/usuarios.controllers.js";
import checkAuth from "../Middleware/authMiddleware.js";

const router = Router();

//Rutas Publicas
router.post("/user", registrar);
router.get("/user/confirmar/:token", confirmar);
router.post("/user/login", auntenticar);
router.post("/user/olvide-password", olvidePassword);
router.route("/user/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//Rutas protegidas a traves de middleware checkAuth
//Identificamos el usuraio para mostrale los datos o funcionalidades que le corresponden

router.get("/user/perfil", checkAuth, perfil);
router.put("/user/perfil/:id", checkAuth, actualizarPerfil);
router.get("/user", checkAuth, usuarioRegistrados);
router.put("/user/actualizar-password", checkAuth, actualizarPassword);

export default router