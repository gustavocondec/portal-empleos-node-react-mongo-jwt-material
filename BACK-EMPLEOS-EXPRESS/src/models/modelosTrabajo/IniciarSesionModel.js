class IniciarSesionModel {
    constructor(login) {
        console.log("eeee", login)
        this.email = login.email;
        this.password = login.password;
    }
    email = ""
    password = ""
    //valida que sean datos correctos
    datosValidos () {
        return true
    }
}
module.exports = IniciarSesionModel