import * as types from './mutation-types'

export default {
    [types.GET_CLIENTES] (state, payload) {
        state.clientes = payload
    }
}