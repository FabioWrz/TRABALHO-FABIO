import * as types from './mutation-types'

export default {
    [types.GET_VENDAS] (state, payload) {
        state.vendas = payload
    }
}