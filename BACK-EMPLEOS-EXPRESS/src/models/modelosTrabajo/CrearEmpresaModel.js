class CrearEmpresaModel {
    constructor(empresa) {
        this.email = empresa.email
        this.password = empresa.password
        this.nombre = empresa.nombre
        this.ruc = empresa.ruc
    }
    datosValidos () {
        return true
    }
}
module.exports = CrearEmpresaModel