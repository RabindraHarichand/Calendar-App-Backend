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

export const actualizarEvento = async (req, res = response) => {
  const eventoId = req.params.id;
  const uid = req.uid;

  try {
    const evento = await Evento.findById(eventoId);

    // console.log(evento);
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese Id",
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    );

    res.json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

export const eliminarEvento = (req, res = response) => {
  const { id } = req.body;

  res.status(201).json({
    ok: true,
    msg: "eliminarEvento",
    id,
  });
};
