const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs")

//Creamos el schema //definimos la forma en que se guardara en lbd
var empresaSchema = new Schema({
    tipo: { type: String, default: "empresa" },
    email: String,
    password: String,
    nombre: String,
    ubicacion: String,
    ruc: String
})
//son metodos accesibles en los documentos(instancias del modelo)
empresaSchema.methods.encryptPassword = async (password) => {
    let salt = await bcrypt.genSalt(10)
    let hash = bcrypt.hash(password, salt)
    return hash;
}
empresaSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
//para poder acceder al la bd necesitamos un modelo , que permite buscar, guardar , etc
const Empresa = model("Empresa", empresaSchema)
//el resultado de una busqueda , etc nos devuelve un documento
module.exports = Empresa