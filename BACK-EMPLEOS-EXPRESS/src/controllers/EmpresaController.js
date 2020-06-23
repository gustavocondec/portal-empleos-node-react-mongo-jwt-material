ctrl = {}//objeto literal
const EmpresaService = require("../services/EmpresaService")
//modelos de trabajo
const CrearEmpresaModel = require("../models/modelosTrabajo/CrearEmpresaModel")
const IniciarSesionModel = require("../models/modelosTrabajo/IniciarSesionModel")
const ActualizarEmpresaModel = require("../models/modelosTrabajo/ActualizarEmpresaModel")
ctrl.iniciarSesion = async (req, res) => {
    let iniciarSesionModel = new IniciarSesionModel(JSON.parse(req.body.login))
    if (iniciarSesionModel.datosValidos()) {
        try {
            let data = await EmpresaService.generarToken(iniciarSesionModel)
            if (data) {
                res.status(200).json(data)
            }
            else {
                res.status(400).json({ mensaje: "Correo o contraseña incorrecta" })
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Error en servidor" })
        }
    } else {
        res.status(400).json({ mensaje: "Llene el formulario correctamente" })
    }
}
ctrl.registrar = async (req, res) => {
    let crearEmpresaModel = new CrearEmpresaModel(JSON.parse(req.body.empresa))
    console.log(crearEmpresaModel)
    if (crearEmpresaModel.datosValidos()) {//si los datos recibidos estan ok
        try {
            if (await EmpresaService.crearEmpresa(crearEmpresaModel)) {//si crea la empesa devuelve tru
                res.status(200).json({ mensaje: "Empresa creada correctamente" })
            } else {
                res.status(400).json({ mensaje: "El correo o ruc ya esta en uso. Intente con otro" })
            }
        } catch (error) {
            res.status(500).json({ mensaje: "Ocurrio un error en el servidor" })
        }
    } else {
        res.status(400).json({ mensaje: "Datos de registro invalidos" })
    }
}
ctrl.perfil = async (req, res) => {
    //req user id tine el id almacendado en el token
    if (req.params.id.toString() == req.user.id) {//si coincide, es decir puede traer sus datos
        let data = await EmpresaService.traerPerfil(req.user.id)
        if (data) {
            res.status(200).json(data);
        }
        else {
            res.status(500).json({ mensaje: "Ocurrio un error en el servidor" })
        }
    }
    else {
        res.status(400).json({ mensaje: "No tienes acceso " })
    }
}
ctrl.actualizar = async (req, res) => {
    if (req.params.id.toString() == req.user.id) {//si coincide el id del token , con el parametro
        let actualizarEmpresaModel = new ActualizarEmpresaModel(JSON.parse(req.body.empresa))
        if (actualizarEmpresaModel.validarDatos()) {
            try {                                    //DEBERIA PASARSE actualizarUsuarioModel "limpiado" pero aun no esta listo
                let resActualizar = await EmpresaService.actualizar(actualizarEmpresaModel, req.user.id)
                if (resActualizar) {
                    res.status(200).json(resActualizar)
                }
            } catch (error) {
                console.log(error)
                res.status(500).json({ mensaje: "Ocurrio un erro en el servidor" })
            }
        }
        else {
            res.status(400).json({ mensaje: "Datos incorrectos" })
        }
    }
    else {
        //el id del parametro no coincide con el del token
        res.status(401).json({ mensaje: "No tienes acceso" })
    }
}
module.exports = ctrl