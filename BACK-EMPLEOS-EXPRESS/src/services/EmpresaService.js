//conjunto de funciones referentes a la entidad de empresa
const empresaService = {}
const jwt = require("jsonwebtoken")
const Empresa = require("../models/modelosBD/Empresa")

//cuando se registra una nueva empresa
empresaService.crearEmpresa = async (CrearEmpresaModel) => {//recibe un objeto con los datos
    let emailEmpresa = await Empresa.findOne({ email: CrearEmpresaModel.email })//busca si existe alguien registrado con ese corre
    let rucEmpresa = await Empresa.findOne({ ruc: CrearEmpresaModel.ruc })//busca si ya esta registrado el ruc
    console.log("haloo ", emailEmpresa, rucEmpresa)
    if (emailEmpresa || rucEmpresa) {
        return false;//si existe el correo o ruc registrado
    }
    else {//puede registrarse xq no estan en uso el ruc y email
        let newEmpresa = new Empresa({
            email: CrearEmpresaModel.email,
            password: CrearEmpresaModel.password,
            nombre: CrearEmpresaModel.nombre,
            ruc: CrearEmpresaModel.ruc
        })
        newEmpresa.password = await newEmpresa.encryptPassword(CrearEmpresaModel.password)//encriptamos el password
        await newEmpresa.save()//guardamos
        return true
    }
}
//cuando solicitan datos de la empresa o su perfil
empresaService.traerPerfil = async (idEmpresa) => {
    try {
        let empresa = await Empresa.findById(idEmpresa)
        let { password, ...rest } = empresa.toObject()//extraemos el password de la respuesta
        return rest//devolvemos los datos sin password
    } catch (error) {
        return null
    }
}
empresaService.generarToken = async (IniciarSesionModel) => {
    let empresa = await Empresa.findOne({ email: IniciarSesionModel.email })//busca que este registrado el correo
    if (empresa && await empresa.matchPassword(IniciarSesionModel.password)) {//si existe y la contrseña coincide
        let token = jwt.sign(//firmamos el token
            {
                id: empresa.id,
                email: empresa.email,
                extra: Date.now() * Math.random() * 1000//para aleatorizar el token//puede obviarse
            },
            process.env.KEY_SECRET,
            {
                //expiresIn: "24 h"
            }
        )
        let { id, email } = empresa
        return {
            id, email, token, tipo: "empresa"
        }
    }
    else {
        return false
    }
}
//se actualizara o completaran los datos de la empresa
//recibe datos a guardar y el id (se extrae del token para mayor seguridad)
empresaService.actualizar = async function (ActualizarEmpresaModel, empresaId) {
    let { email, password, id, _id, tipo, ...resto } = ActualizarEmpresaModel//para evitar modificar datos sensibles extraemos email, password, e id
    let aux = await Empresa.findByIdAndUpdate(empresaId, resto)
    if (aux) {
        return await this.traerPerfil(empresaId)
    } else {
        return false
    }
}

module.exports = empresaService