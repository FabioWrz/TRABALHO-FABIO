import Clientes from '@/services/clientes'
import * as types from './mutation-types'

export const getClientes = async ({ commit }) => {
    const request = await Clientes.getClientes()
    commit(types.GET_CLIENTES, request.data.clientes)
}
export const setClientes = async (_content, data) => {
    console.log('vuex')
    return Clientes.setClientes(data)
}
export const deleteClientes = async ({commit}, data) => {
     await Clientes.deleteClientes(data)
     getClientes({commit})
     }
     