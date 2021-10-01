const db = require('../configs/pg')


const getClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = {};

    await db.query(sql)
        .then(ret => clientes = {total: ret.rows.length, clientes: ret.rows})
        .catch(err => clientes = err.stack);

    return clientes;
}

const sql =
`insert into clientes (cli_id_cliente, cli_nome, cli_cpf_cnpj, cli_cidade, cli_endereco)
values ($1, $2, $3, $4, $5) `

const postClientes = async (params) => {
    const { cli_id_cliente, cli_nome, cli_cpf_cnpj, cli_cidade, cli_endereco } = params
    await db.query(sql, [cli_id_cliente, cli_nome, cli_cpf_cnpj, cli_cidade, cli_endereco, ])
}

const sql_delete =
`delete from clientes
where cli_id_cliente = $1`

const deleteClientes = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const patchClientes = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e != 'cli_id_cliente' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where cli_id_cliente = ${params['cli_id_cliente']}`
    db.query(sql);
}

module.exports.getClientes = getClientes;
module.exports.postClientes = postClientes;
module.exports.deleteClientes = deleteClientes;
module.exports.patchClientes = patchClientes;
