let { Schema, model } = require("mongoose")

var empleoSchema = new Schema({
    empresa: { type: Schema.ObjectId, ref: "Empresa" },//guardamos el id de la empresa que lo crea
    titulo: String,
    descripcion: String,
    cuerpo: String,
    gradoRequerido:
        [
            String
        ],//Secundaria, Tecnico, Universitario
    carreraUniversitaria:
        [
            String
        ],//las carreras que permite
    carreraTecnica:
        [
            String
        ]//las carreras que permite
})

const Empleo = model("Empleo", empleoSchema)

module.exports = Empleo