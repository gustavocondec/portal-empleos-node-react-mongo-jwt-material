class ActualizarEmpresaModel {
    constructor(empresa) {
        this.nombre = empresa.nombre
        this.ruc = empresa.ruc
    }
    validarDatos () {
        return true
    }
    datosLimpios () {

    }
}
module.exports = ActualizarEmpresaModel