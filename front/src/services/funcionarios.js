import Axios from "axios"

export default class Funcionarios {
    static getFuncionarios = async () => {
        return await Axios.get(`http://localhost:3000/funcionarios`)
    }
    static setFuncionarios = async (data) => {
        console.log(data)   
        return await Axios.post(`http://localhost:3000/funcionarios`, data)
    }
}