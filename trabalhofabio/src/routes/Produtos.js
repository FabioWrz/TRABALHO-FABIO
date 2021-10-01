const ProdutosController = require('../controllers/Produtos');

module.exports = (app) => {
    app.get('/produtos', ProdutosController.getProdutos
     //#region Documentação
        /*  #swagger.tags = ['Produtos']
        #swagger.summary = 'Busca lista de Produtos.'
        */
        //#endregion
        )
    app.post('/produtos', ProdutosController.postProdutos
    //#region Documentação
        /*  #swagger.tags = ['Produtos']
        #swagger.summary = 'Insere 1 Produto.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um Produto',
                type: 'json',
                schema: {
                    pro_id_produto: 1,
                    pro_nome: "Feijão",
                    pro_estoque: "24",
                    pro_fornecedor: "1",
                    pro_marca: "Boniella"
                }
            }
        */
        //#endregion
        )
    app.delete('/produtos', ProdutosController.deleteProdutos
    //#region Documentação
    //#swagger.summary = 'Deleta 1 Produto.'
        /*  #swagger.tags = ['Produtos']
        #swagger.parameters['id'] = {
     description: "Id do Produto",
     value: "1"
}
        */
        //#endregion
    )
    app.patch('/produtos', ProdutosController.patchProdutos
    //#region Documentação
        /*  #swagger.tags = ['Produtos']
        #swagger.summary = 'Atualização parcial dos registros.'
        */
        //#endregion
    )
}