import Funcionarios from '@/services/funcionarios'
import Clientes from '../../../services/clientes'
import * as types from './mutation-types'

export const getFuncionarios = async ({ commit }) => {
    const request = await Funcionarios.getFuncionarios()
    commit(types.GET_FUNCIONARIOS, request.data.funcionarios)
}
export const setFuncionarios = async (_content, data) => {
    console.log('vuex')
    return Funcionarios.setFuncionarios(data)
}
export const deleteClientes = async ({commit}, data) => {
    await Clientes.deleteClientes(data)
    getClientes({ commit })
}