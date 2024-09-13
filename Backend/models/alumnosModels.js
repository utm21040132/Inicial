//Generacion de esquemas
import{Schema, model} from "mongoose" 

const esquemaAlumnos = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    }
});

//Los esquemas son para la reutilizacion del codigo
//Todos los modelos son una tablas
export const modeloAlumnos = new model("Tabla de alumnos", esquemaAlumnos);