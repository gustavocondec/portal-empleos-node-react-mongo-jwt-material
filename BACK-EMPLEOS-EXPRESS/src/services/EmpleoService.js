const empleoService = {}
const mongoose = require("mongoose")


const Empleo = require("../models/modelosBD/Empleo")
const Empresa = require("../models/modelosBD/Empresa")

//recibde datos del empleo a crear , asi como el id de la empresa que lo crea
empleoService.crearEmpleo = async (CrearEmpleoModel, idEmpresa) => {
    console.log("entra")
    if (await Empresa.findById(idEmpresa)) {//busca si existe la empresa que quiere crear el empleo
        CrearEmpleoModel.empresa = idEmpresa//indicamos el id de la empresa que crea el empleo
        let { id, _id, ...resto } = CrearEmpleoModel//retiramos datos sensibles que no pueden ser guardados x el usuario
        console.log(CrearEmpleoModel)
        console.log("gggg")

        console.log(resto)
        let newEmpleo = new Empleo(resto)

        await newEmpleo.save()
        return true
    } else {//no existe empresa que quiere crear empleo
        return false
    }
}
//devuelve lista de empleos segun la configuracion
empleoService.traerListaEmpleos = async () => {
    return await Empleo.find({})
}
//devuelve un unico empleo , el del idEmpleo
empleoService.traerEmpleo = async (idEmpleo) => {
    if (mongoose.Types.ObjectId.isValid(idEmpleo))
        return await Empleo.findById(idEmpleo)
    else {
        return false
    }
}
//Actualiza un empleo de idEmpleo perteniciente a idEmpresa (verificar que corresponda)
empleoService.actualizarEmpleo = async (ActualizarEmpleoModel, idEmpresa, idEmpleo) => {
    //primero verificar que el empleo pertenezca a la empresa
    let empleo = await Empleo.findOne({ _id: idEmpleo });
    console.log("entra aaaaa", empleo, empleo.empresa, idEmpresa);
    if (empleo.empresa == idEmpresa) {//verificamos que el empleo haya sido creado x el idEmpresa que lo quiere modificar
        let { id, _id, empresa, ...resto } = ActualizarEmpleoModel;//extraemos campos sensibles que no pueden ser modificados nunca

        await Empleo.findByIdAndUpdate(idEmpleo, resto);
        return await empleoService.traerEmpleo(idEmpleo);
    } else {
        return false;
    }
}
module.exports = empleoService;