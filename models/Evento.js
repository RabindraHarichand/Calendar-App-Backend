import { Schema, SchemaTypes, model } from "mongoose";

const EventoSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

export default model("Evento", EventoSchema);
