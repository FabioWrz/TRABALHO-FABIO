const FuncionariosController = require('../controllers/Funcionarios');

module.exports = (app) => {
app.get('/funcionarios', FuncionariosController.getFuncionarios
 //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Busca lista de Funcionarios.'
        */
        //#endregion
        )
app.post('/funcionarios', FuncionariosController.postFuncionarios
//#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Insere 1 Funcionario.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um Funcionario',
                type: 'json',
                schema: {
                    fun_id_funcionario: 1,
                    fun_nome: "Oda",
                    fun_cidade: "1",
                    fun_endereco: "Rua Presidente Juscelino",
                    fun_cpf: "117.123.759-12"
                }
            }
        */
        //#endregion
        )
app.delete('/funcionarios/:fun_id_funcionario', FuncionariosController.deleteFuncionarios
 //#region Documentação
    //#swagger.summary = 'Deleta 1 Funcionario.'
        /*  #swagger.tags = ['Funcionarios']
        #swagger.parameters['id'] = {
     description: "Id do Funcionario",
     value: "1"
}
        */
        //#endregion
        )
app.patch('/funcionarios', FuncionariosController.patchFuncionarios
 //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Atualização parcial dos registros.'
        */
        //#endregion
        )
}