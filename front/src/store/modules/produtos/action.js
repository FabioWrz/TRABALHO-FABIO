import Produtos from '@/services/produtos'
import * as types from './mutation-types'

export const getProdutos = async ({ commit }) => {
    const request = await Produtos.getProdutos()
    commit(types.GET_PRODUTOS, request.data.produtos)
}
export const setProdutos = async (_content, data) => {
    console.log('vuex')
    return Produtos.setProdutos(data)
}