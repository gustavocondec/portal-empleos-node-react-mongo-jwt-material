//funciones del controlador referidas a la postulacion de un empleo
const PostulacionService = require("../services/PostulacionService")
const { isValidObjectId } = require("mongoose")
ctrl = {}
//rutas destinadas para el usuario

//Api desde el usuario que va a postular a un idempleo, tmb recibe iduser, pero se corrobora con el id del token 
ctrl.postularAEmpleo = async (req, res) => {//token de usuario corresponde al id user
    const { iduser, idempleo } = req.params;
    console.log(iduser, req.user.id)
    //validar que iduser y idempleo sean validos
    if (isValidObjectId(idempleo) && isValidObjectId(iduser) && iduser === req.user.id) {//son id's validos

        if (await PostulacionService.usuarioPostulaAEmpleo(iduser, idempleo) == true) {
            res.status(200).json({ mensaje: "Postulacion Correxta" })
        } else {
            res.status(500).json({ mensaje: "No se pudo postular. Tal ve z ya tiene una postulacion" })
        }
    } else {
        res.status(400).json({ mensaje: "Datos invalidos" })
    }
}
ctrl.listaEmpleosPostulados = async (req, res) => {
    console.log("Lista empleos postulados por user:  ", req.params)
    //req.params.iduser
    if (isValidObjectId(req.params.iduser) && req.user.id == req.params.iduser) {//se extrae datos del token
        let lista = await PostulacionService.verListaPostulacionDelUsuario(req.params.iduser)
        if (lista) {
            res.status(200).json(lista)
        } else {
            res.status(500).json({ mensaje: "Error al traer lista de postulaciones" })
        }
    } else {
        res.status(400).json({ mensaje: "Id invalido" })
    }
}


//rutas destinadas para la empresa
ctrl.listaUsuariosPostulados = async (req, res) => {//devuelve la lista de usuarios que postularon a un emploe :idemple de una empres(token)
    let idempleo = req.params.idempleo
    let idempresa = req.params.idempresa
    if (isValidObjectId(idempleo) == true && isValidObjectId(idempresa) && idempresa == req.user.id) {
        let lista = await PostulacionService.verListaUsuariosPostuladosAEmpleo(idempleo, idempresa)
        if (lista) {
            res.status(200).json(lista)
        } else {
            res.status(500).json({ mensaje: "No se pudo traer datos" })
        }
    } else {
        res.status(400).json({ mensaje: "DATOS ENVIADOS INVALIDOS" })
    }
}


module.exports = ctrl