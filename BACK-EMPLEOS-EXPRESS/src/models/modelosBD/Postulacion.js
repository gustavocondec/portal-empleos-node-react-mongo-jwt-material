const { Schema, model } = require("mongoose")
//definimos el esquema
var postulacionSchema = new Schema({
    fechaPostulacion: { type: Date, default: Date.now },//Fecha cuando postula
    //nombres del modelo al cual se mezclan
    usuario: { type: Schema.ObjectId, ref: "Usuario" },//El id del usuario que esta postulando
    empleo: { type: Schema.ObjectId, ref: "Empleo" },//id del empleo al cual postule el usuario
    estado: String
})

//modelo de trabajo
const Postulacion = model("Postulacion", postulacionSchema)
module.exports = Postulacion