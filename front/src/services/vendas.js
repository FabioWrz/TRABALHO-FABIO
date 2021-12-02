import Axios from "axios"

export default class Vendas {
    static getVendas = async () => {
        return await Axios.get(`http://localhost:3000/vendas`)
    }
    static setVendas = async (data) => {
        console.log(data)   
        return await Axios.post(`http://localhost:3000/vendas`, data)
    }
}