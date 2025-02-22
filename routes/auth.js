/*
    Rutas de Usuarios/Auth
    host + api/auth
*/

import { Router } from "express";
const router = Router();

import {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} from "../controllers/auth.js";

router.post("/new", crearUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

export default router;
