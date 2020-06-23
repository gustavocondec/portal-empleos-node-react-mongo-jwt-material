import axios from "axios"
let URL = process.env.REACT_APP_API + "/usuarios"
export default {
    async register (data) {//registra un nuevo usuario
        return await axios({
            method: "POST",
            url: URL,
            data
        })
    },
    async login (data) {//inicia sesion
        return await axios({
            method: "GET",
            url: URL,
            data
        })
    },
    async editarDatos (data) {//edita data de un usuario
        return await axios({
            method: "put",
            url: URL,
            data
        })
    },
    async getUserById (userId) {
        return await axios({
            method: "GET",
            url: URL + "/" + userId
        })
    }
}