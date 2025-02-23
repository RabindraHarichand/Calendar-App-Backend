import { response } from "express";
import { validationResult } from "express-validator";

export const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  //manejo de errorres
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

export const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

export const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
