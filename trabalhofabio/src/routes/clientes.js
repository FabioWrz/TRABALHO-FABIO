const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.get('/clientes', clientesController.getClientes
    //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Busca lista de Clientes.'
        */
        //#endregion
        )
    app.post('/clientes', clientesController.postClientes
     //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Insere 1 Cliente.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um Cliente',
                type: 'json',
                schema: {
                    cli_id_cliente: 1,
                    cli_nome: "Fabio",
                    cli_cpf_cnpj: "117.505.789-48",
                    cli_cidade: "Sul Brasil-SC",
                    cli_endereco: "Rua Presidente Juscelino"
                }
            }
        */
        //#endregion
        )
    app.delete('/clientes/:cli_id_cliente', clientesController.deleteClientes
    //#region Documentação
    //#swagger.summary = 'Deleta 1 Cliente.'
        /*  #swagger.tags = ['Clientes']
        #swagger.parameters['id'] = {
     description: "Id do Cliente",
     value: "1"
}
        */
        //#endregion
        )
    app.patch('/clientes', clientesController.patchClientes
    //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Atualização parcial dos registros.'
        */
        //#endregion
        )
}
