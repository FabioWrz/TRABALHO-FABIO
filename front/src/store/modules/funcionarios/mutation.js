import * as types from './mutation-types'

export default {
    [types.GET_FUNCIONARIOS] (state, payload) {
        state.funcionarios = payload
    }
}