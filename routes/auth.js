/*
    Rutas de Usuarios/Auth
    host + api/auth
*/

import { Router } from "express";
import { check } from "express-validator";
const router = Router();

import {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} from "../controllers/auth.js";

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("email", "El email es obligatorio").isEmail(),

    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),

    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

export default router;
