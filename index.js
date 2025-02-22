import express from "express";
import "dotenv/config";

import authRouter from "./routes/auth.js";

// console.log(process.env);

//Crear el servidor de express
const app = express();

//Directorio publico
app.use(express.static("public"));

//Rutas
app.use("/api/auth", authRouter);

//TODO: CRUD// Eventos
//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
