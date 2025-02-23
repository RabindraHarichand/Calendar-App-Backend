import { response } from "express";

export const getEventos = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "getEventos",
  });
};

export const crearEvento = (req, res = response) => {
  //verificar que tenga el evento

  res.status(201).json({
    ok: true,
    msg: "crearEventos",
  });
};

export const actualizarEvento = (req, res = response) => {
  const { id } = req.body;

  res.status(201).json({
    ok: true,
    msg: "actualizarEvento",
    id,
  });
};

export const eliminarEvento = (req, res = response) => {
  const { id } = req.body;

  res.status(201).json({
    ok: true,
    msg: "eliminarEvento",
    id,
  });
};
