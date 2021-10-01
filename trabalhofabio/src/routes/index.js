const Produtos = require('./Produtos');
const Clientes = require ('./clientes');
const Funcionarios = require ('./Funcionarios');
const Vendas = require('./Vendas');

module.exports = (app) => {
    Clientes(app),
    Funcionarios(app),
    Produtos(app),
    Vendas(app)
}