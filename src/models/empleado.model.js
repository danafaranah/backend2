import mongoose from "mongoose";

const { Schema, model } = mongoose;

import mongoosePaginate from "mongoose-paginate-v2";

const empleadoSchema = new Schema({
    nombres: {
        type: String,
        required: [true, "El campo nombres es requerido"],
    },

    apellidos: {
        type: String,
        default: "",
    },

    correo: {
        type: String,
        unique: [true, "El campo correo ya existe"],
        required: [true, "El campo correo es requerido"],
    },

    edad: {
        type: Number,
        required: [true, "El campo edad es requerido"],
    },

    salario: {
        type: Number,
        required: [true, "El campo salario es requerido"],
    },

    cargo: {
        type: String,
        required: [true, "El campo cargo es requerido"],
    },
}, {
    timestamps: true,
});

empleadoSchema.plugin(mongoosePaginate);
export const empleadoModel = model("empleado", empleadoSchema)