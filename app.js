const mongoose = require('mongoose');
const urlbd = "mongodb://localhost:27017";
//Conexion ala base de datos
mongoose.connect(urlbd)
.then(()=>{
    console.log("Funciona la connexion a la base de datos")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
})

//Generacion de esquemas

const esquemaAlumnos = new mongoose.Schema({
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
const modeloAlumnos = new mongoose.model("Tabla de alumnos", esquemaAlumnos);

modeloAlumnos.create({
    name: "Jorge",
    lastName: "Montantes",
    age: 21
})

