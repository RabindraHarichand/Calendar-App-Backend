import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEventos,
} from "../controllers/events.js";

const router = Router();

//Todas  tienen que pasar por la validacion del jwt
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear un nuevo evento
router.post("/", crearEvento);

// Actualizar Evento
router.put("/:id", actualizarEvento);

// Borrar Evento
router.delete("/:id", eliminarEvento);

export default router;
