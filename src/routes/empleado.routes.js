import { Router } from "express";
import { check } from "express-validator";

import empleadoCtrl from "../controllers/empleado.controller.js";
import { validFields } from "../middleware/Validfields.js";
import { seedDt } from "../seed/seedDb.js";
const route = Router();
//Seed Poblar Base de Datos

route.get("/seed", seedDt)

route.get("/", empleadoCtrl.find);
route.get("/:id", empleadoCtrl.findEmpleadoById);

route.post(
    "/", [
        check("nombres", "El campo nombres es obligatorio").notEmpty().isLength({
            min: 4,
            max: 50,
        }),
        check("apellidos").optional().isLength({
            min: 4,
            max: 50,
        }),
        check("correo").notEmpty().isEmail(),
        check("edad", "El campo edad es obligatorio").notEmpty().isLength({
            min: 1,
            max: 3,
        }),
        check("salario", "El campo salario es obligatorio").notEmpty(),
        check("cargo", "El campo cargo es obligatorio").notEmpty(),
    ],
    validFields,
    empleadoCtrl.saveEmpleado
);

route.put("/:id", empleadoCtrl.updateEmpleado);
route.delete("/:id", empleadoCtrl.deleteEmpleado);

export default route;