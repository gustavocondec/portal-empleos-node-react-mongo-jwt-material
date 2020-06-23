ctrl = {}
const EmpleoService = require("../services/EmpleoService")
//modelos de trabajo
const CrearEmpleoModel = require("../models/modelosTrabajo/CrearEmpleoModel")
const ActualizarEmpleoModel = require("../models/modelosTrabajo/ActualizarEmpleoModel")
ctrl.crearEmpleo = async (req, res) => {
    console.log("holaaa")
    try {
        let crearEmpleoModel = new CrearEmpleoModel(JSON.parse(req.body.empleo))//recibe un objeto en campo empresa
        console.log("gacito")
        if (crearEmpleoModel.datosValidos()) {//si los datos son correctos
            if (await EmpleoService.crearEmpleo(crearEmpleoModel, req.user.id))//el id es de al empresa que esta creando el empleo
            {
                res.status(200).json({ mensaje: "Empleo creado" })
            }
            else {
                res.status(400).json({ mensaje: "No se pudo guardar empleo" })
            }
        } else {
            res.status(400).json({ mensaje: "datos invalidos" })
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Ocurrio un error en er servidor" })
    }
}
ctrl.actualizarEmpleo = async (req, res) => {
    console.log("actualizar empleo")
    try {
        let actualizarEmpleoModel = new ActualizarEmpleoModel(JSON.parse(req.body.empleo))
        if (actualizarEmpleoModel.validarDatos()) {//si los datos son validos
            let data = await EmpleoService.actualizarEmpleo(actualizarEmpleoModel, req.user.id, req.params.id)
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(400).json({ mensaje: "No se pudo actualizar" })
            }

        } else {

            res.status(400).json({ mensaje: "Datos de actualizacion Invalidos" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: "Ocurrio un error en el servidor" })
    }
}
ctrl.listaEmpleos = async (req, res) => {//devuelve lista de empleos//No requiere token
    try {
        res.status(200).json(await EmpleoService.traerListaEmpleos())
    } catch (error) {
        res.status(500).json({ mensaje: "Ocurrio un error en el servidor" })
    }
}
ctrl.traerEmpleo = async (req, res) => {
    try {
        let empleo = await EmpleoService.traerEmpleo(req.params.id)
        if (empleo) {
            res.status(200).json(empleo)
        } else {
            res.status(400).json({ mensaje: "Id invalido" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: "Ocurrio un error en el servidor" })
    }
}
module.exports = ctrl