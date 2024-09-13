import { modeloAlumnos } from "../models/alumnosModels.js";

modeloAlumnos.create({
    name: "Jorge",
    lastName: "Montantes",
    age: 21
})

export const test = ()=>{
    console.log("Se esta mandando a llamar correctamente el controlador");
}