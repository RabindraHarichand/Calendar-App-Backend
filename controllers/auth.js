import { response } from "express";

export const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "registro",
  });
};

export const loginUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

export const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
