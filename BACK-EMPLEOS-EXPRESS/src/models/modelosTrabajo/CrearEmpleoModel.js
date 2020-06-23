class CrearEmpleoModel {
    constructor(empleo) {
        this.titulo = empleo.titulo
        this.descripcion = empleo.descripcion
    }
    datosValidos () {
        return true
    }
}

module.exports = CrearEmpleoModel