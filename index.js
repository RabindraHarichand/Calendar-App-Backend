import express from "express";
import "dotenv/config";
import path from "path";
import authRouter from "./routes/auth.js";
import eventRouter from "./routes/events.js";
import { dbConnection } from "./database/config.js";
import cors from "cors";
// console.log(process.env);

//Crear el servidor de express
const app = express();

//Base de Datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//TODO: CRUD// Eventos
//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
