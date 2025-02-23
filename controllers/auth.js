import { response } from "express";
import { validationResult } from "express-validator";

export const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

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
