import { response } from "express";
import Evento from "../models/Evento.js";

export const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");

  res.status(201).json({
    ok: true,
    eventos,
  });
};

export const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
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
