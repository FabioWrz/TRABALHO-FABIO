import * as actions from './action'
import * as getters from './getter'
import mutations from './mutation'
import state from './state'

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}