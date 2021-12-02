import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuInicial from '../components/MenuInicial'
import Login from '../components/Login'
import FuncionariosCadastro from '../components/FuncionariosCadastro'
import FuncionariosListagem from '../components/FuncionariosListagem'
import CadastroClientes from '../components/CadastroClientes'
import ListagemClientes from '../components/ListagemClientes'
import CadastroProdutos from '../components/CadastroProdutos'
import ListagemProdutos from '../components/ListagemProdutos'
import CadastroVendas from '../components/CadastroVendas'
import ListagemVendas from '../components/ListagemVendas'
import Inicio from '../components/Inicio'
import Cliente from '../components/Cliente'



Vue.use(VueRouter)

const routes = [
{ path: '/MenuInicial', name: 'MenuInicial', component: MenuInicial},
{ path: '/Login', name: 'Login', component: Login},
{ path: '/FuncionariosCadastro', name: 'FuncionariosCadastro', component: FuncionariosCadastro},
{ path: '/FuncionariosListagem', name: 'FuncionariosListagem', component: FuncionariosListagem},
{ path: '/CadastroClientes', name: 'CadastroClientes', component: CadastroClientes},
{ path: '/ListagemClientes', name: 'ListagemClientes', component: ListagemClientes},
{ path: '/CadastroProdutos', name: 'CadastroProdutos', component: CadastroProdutos},
{ path: '/ListagemProdutos', name: 'ListagemProdutos', component: ListagemProdutos},
{ path: '/CadastroVendas', name: 'CadastroVendas', component: CadastroVendas},
{ path: '/ListagemVendas', name: 'ListagemVendas', component: ListagemVendas},
{ path: '/Inicio', name: 'Inicio', component: Inicio},
{ path: '/Cliente', name: 'Cliente', component: Cliente},

]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router