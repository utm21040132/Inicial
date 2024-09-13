import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { test } from "./Backend/controllers/alumnosController.js";

dotenv.config();



//Conexion ala base de datos
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
})

const app = express();
app.use(cors());

app.listen(4000,()=>{
    console.log("Se escucha correctamente el servidor, no se escucha borroso");
});

test();