import axios from "axios"
let URL = process.env.REACT_APP_API + "/empresas"

export default {
    async createEmpresa (data) {
        return await axios({
            method: "post",
            url: URL,
            data
        })
    },
    async inciarSesion (data) {
        return await axios({
            method: "post",
            url: URL,
            data
        })
    },
    async editEmpresa (data) {
        return await axios({
            method: "put",
            url: URL,
            data
        })
    },
    async getEmpresaById (empresaId) {
        return await axios({
            method: "get",
            url: URL + "/" + empresaId
        })
    }

}