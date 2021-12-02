import Vue from 'vue'
import Vuex from 'vuex'

import clientes from './modules/clientes'
import funcionarios from './modules/funcionarios'
import produtos from './modules/produtos'
import vendas from './modules/vendas'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        clientes, funcionarios, produtos, vendas
    }
})

export default store