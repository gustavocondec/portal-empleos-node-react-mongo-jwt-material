class ActualizarUsuarioModel {
    constructor(usuario) {//llenar datos recibidos en variables locales
        console.log("actualizarusuariomode,   ", usuario)
        this.nombres = usuario.nombres
        this.apellidos = usuario.apellidos
        this.telefono = usuario.telefono
        this.edad = usuario.edad
        //########################/
        this.universidad = usuario.universidad
        this.carrera = usuario.carrera
        this.ciclo = usuario.ciclo
    }
    validarDatos () {//verifica que los datos estes correctos
        return true;
    }


    /*
    datosLimpio devuelve un json con solo los valores que tengan datos no vacios o nulos
    porque si pasamos todos los datos incluyendo los vacios y actualizamos la bd, 
    se perderan datos
    */
    datosLimpios () {

        return {

        }
    }
}
module.exports = ActualizarUsuarioModel