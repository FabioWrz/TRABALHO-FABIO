import Axios from "axios"

export default class Clientes {
    static getClientes = async () => {
        return await Axios.get(`http://localhost:3000/clientes`)
    }
    static setClientes = async (data) => {
        console.log(data)   
        return await Axios.post(`http://localhost:3000/clientes`, data)
    }
    static deleteClientes = async (data) => {
        return await Axios.delete(`http://localhost:3000/clientes/${data.cli_id_cliente}`)
    }
}