import Axios from "axios"

export default class Produtos {
    static getProdutos = async () => {
        return await Axios.get(`http://localhost:3000/produtos`)
    }
    static setProdutos = async (data) => {
        console.log(data)   
        return await Axios.post(`http://localhost:3000/produtos`, data)
    }
}