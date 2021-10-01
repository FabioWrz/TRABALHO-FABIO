const VendasController = require('../controllers/Vendas');

module.exports = (app) => {
    app.get('/vendas', VendasController.getVendas
     //#region Documentação
        /*  #swagger.tags = ['Vendas']
        #swagger.summary = 'Busca lista de Vendas.'
        */
        //#endregion
    )
    app.post('/vendas', VendasController.postVendas
     //#region Documentação
        /*  #swagger.tags = ['Vendas']
        #swagger.summary = 'Insere 1 Vendas.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para fazer uma Venda',
                type: 'json',
                schema: {
                    ven_id_venda: 1,
                    ven_cliente: "1",
                    ven_datavenda: "30/09/2021",
                    ven_valor_total: "12,99",
                    ven_funcionario: "1",
                    ven_pagamento: "1"
                }
            }
        */
        //#endregion
    )
    app.delete('/vendas/:ven_id_venda', VendasController.deleteVendas
      //#region Documentação
    //#swagger.summary = 'Deleta 1 Venda.'
        /*  #swagger.tags = ['Vendas']
        #swagger.parameters['id'] = {
     description: "Id da Venda",
     value: "1"
}
        */
        //#endregion
    )
    app.patch('/vendas', VendasController.patchVendas
     //#region Documentação
        /*  #swagger.tags = ['Vendas']
        #swagger.summary = 'Atualização parcial dos registros.'
        */
        //#endregion
    )
}
