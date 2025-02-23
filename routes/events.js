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
import { isDate } from "../helpers/isDate.js";

const router = Router();

//Todas  tienen que pasar por la validacion del jwt
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").notEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar Evento
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").notEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

// Borrar Evento
router.delete("/:id", eliminarEvento);

export default router;
