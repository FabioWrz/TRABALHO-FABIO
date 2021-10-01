const db = require('../configs/pg')

const getFuncionarios = async () => {
    let sql = 'select * from funcionarios';
    let funcionarios =  await db.query(sql)
        .then(ret => clientes = {total: ret.rows.length, clientes: ret.rows})
        .catch(err => clientes = err.stack);

    return funcionarios;
}

const sql =
`insert into Funcionarios (fun_id_funcionario, fun_nome, fun_cidade, fun_endereco, fun_cpf)
values ($1, $2, $3, $4, $5) `

const postFuncionarios = async (params) => {
    const { fun_id_funcionario, fun_nome, fun_cidade, fun_endereco, fun_cpf } = params
    await db.query(sql, [fun_id_funcionario, fun_nome, fun_cidade, fun_endereco, fun_cpf, ])
}

const sql_delete =
`delete from Funcionarios
where id = $1`

const deleteFuncionarios = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const patchFuncionarios = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e != 'fun_id_funcionario' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update Funcionarios set ${fields} where fun_id_funcionario = ${params['fun_id_funcionario']}`
    db.query(sql);
}


module.exports.getFuncionarios = getFuncionarios;
module.exports.postFuncionarios = postFuncionarios;
module.exports.deleteFuncionarios = deleteFuncionarios;
module.exports.patchFuncionarios = patchFuncionarios;