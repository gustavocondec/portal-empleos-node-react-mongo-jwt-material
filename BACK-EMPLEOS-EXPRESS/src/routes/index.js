/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();

const usuario = require("../controllers/UsuarioController")
const empresa = require("../controllers/EmpresaController.js")
const empleo = require("../controllers/EmpleoControler")
const postulacion = require("../controllers/PostulacionController")

//las rutas de nuestro aplicacion web
module.exports = app => {

    //Usuario   #token type=usuario
    router.post("/usuarios", usuario.register)//para registrarse
    router.get("/usuarios", usuario.login) //para iniciar sesion
    router.get("/usuarios/:id", usuario.perfil)//obtine los datos del usuario :id (aunque realmente del token)
    router.put("/usuarios/:id", usuario.actualizar)//actualiza los datos del usuario :id (pero usa el dato del token)


    //Empresa  #token type=empresa
    router.post("/empresas", empresa.registrar)//registrar una nueva empresa
    router.get("/empresas", empresa.iniciarSesion)//Iniciar Sesion
    router.get("/empresas/:id", empresa.perfil)
    router.put("/empresas/:id", empresa.actualizar)//requiere token de la empresa

    //empleos

    router.post("/empleos", empleo.crearEmpleo)//requiere token de empresa que crea el empleo
    router.get("/empleos", empleo.listaEmpleos)//no requiere token// Retorna un array de empleos
    router.get("/empleos/:id", empleo.traerEmpleo)//no requiere token//devuelve datos del empleo de :id
    router.put("/empleos/:id", empleo.actualizarEmpleo)//requiere token de la empresa que creo ese empleo//solo puede editarse x la empresa que lo creo


    //***************postulacion*************
    //para usuario
    router.post("/usuarios/:iduser/empleos/:idempleo", postulacion.postularAEmpleo)//reuiere token user//un user postula a empleo, verificar el userid con el token
    router.get("/usuarios/:iduser/empleos/", postulacion.listaEmpleosPostulados)//requiere token user//retorna una lista con los empleos postulados por eluser id, verificar correspondencia del token
    //para la empresa
    router.get("/empresas/:idempresa/empleos/:idempleo", postulacion.listaUsuariosPostulados)//requiere token empresa//retorna una lista de los usuarios que han postulado al idempleo
    /**************FIN POSTULACION ***********/


    app.use(router) //
}








/*
validarTokenUsuario = module.exports = function (req, res, next) {
    try {
        if (req.user.tipo == "usuario") {
            next()
        }
        else {
            res.status(400).json({ mensaje: "El token es invalido, debe ser de un usuario" })
        }
    } catch (error) {
        //res.status(400).json({ mensaje: "Token Invalido" })
    }
}
validarTokenEmpresa = module.exports = function (req, res, next) {//valida que el token recibido sea de una empresa y no de un usuario(postulante)
    try {
        if (req.user.tipo == "empresa") {
            next()
        }
        else {
            res.status(400).json({ mensaje: "El token no es valido, debe ser de una empresa" })
        }
    } catch (error) {
        //res.status(400).json({ mensaje: "Token Invalido" })
    }
}*/