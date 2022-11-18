import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connect } from "mongoose";
import { connectDb } from "./database.js";
connectDb();

// Rutas

import empleadoRoutes from "./routes/empleado.routes.js";

const app = express();

app.set("port", 4000);
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/empleados", empleadoRoutes);

app.listen(app.get("port"), () => {
    console.log(`Servidor escuchando desde el puerto ${app.get("port")}`);
});