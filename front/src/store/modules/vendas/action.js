import Vendas from '@/services/clientes'
import * as types from './mutation-types'

export const getVendas = async ({ commit }) => {
    const request = await Clientes.getVendas()
    commit(types.GET_VENDAS, request.data.vendas)
}
export const setVendas = async (_content, data) => {
    console.log('vuex')
    return Vendas.setVendas(data)
}