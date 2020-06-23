class ActualizarEmpleoModel {
    constructor(empleo) {
        this.titulo = empleo.titulo
        this.descripcion = empleo.descripcion
    }

    validarDatos () {
        return true
    }

}
module.exports = ActualizarEmpleoModel