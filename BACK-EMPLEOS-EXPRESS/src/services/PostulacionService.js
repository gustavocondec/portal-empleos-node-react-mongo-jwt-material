const Postulacion = require("../models/modelosBD/Postulacion")
const Empleo = require("../models/modelosBD/Empleo")
const postulacionService = {}

//para usuario
postulacionService.usuarioPostulaAEmpleo = async (idusuario, idempleo) => {
    let existePostulacion = await Postulacion.find({ empleo: idempleo, usuario: idusuario })
    let existeEmpleo = await Empleo.findById(idempleo)
    console.log(existePostulacion.length, existeEmpleo)
    if (existeEmpleo) {//si existe el empleo de ese id
        if (existePostulacion.length == 0) {//si no esta guardada la postulacion
            let newPostulacion = new Postulacion({
                usuario: idusuario,
                empleo: idempleo
            })
            await newPostulacion.save()
            return true
        } else {
            return false//si ya ha postulado a ese empleo
        }
    }
    else {
        return false//si no existe el empleo
    }
}
postulacionService.verListaPostulacionDelUsuario = async (idusuario) => {
    let lista = await Postulacion.find({ usuario: idusuario })
    console.log(lista)
    if (lista) {
        return lista
    } else {
        return false
    }
}





//para empresa
postulacionService.verListaUsuariosPostuladosAEmpleo = async (idempleo, idempresa) => {//empresa ve una lista de postulaciones para un empleo
    let lista = await Postulacion.find({ empleo: idempleo })
    console.log(lista)
    if (lista) {
        return lista
    } else {
        return false
    }
}

module.exports = postulacionService