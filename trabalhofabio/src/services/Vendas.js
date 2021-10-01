const db = require('../configs/pg')


const getvendas = async () => {
    let sql = 'select * from vendas';
    let vendas = await db.query(sql)
        .then(ret => vendas = {total: ret.rows.length, vendas: ret.rows})
        .catch(err => vendas = err.stack);

    return vendas;
}

const sql =
`insert into vendas (ven_id_venda, ven_cliente, ven_datavenda, ven_valor_total, ven_funcionario, ven_pagamento)
values ($1, $2, $3, $4, $5, $6) `

const postvendas = async (params) => {
    const { ven_id_venda, ven_cliente, ven_datavenda, ven_valor_total, ven_funcionario, ven_pagamento } = params
    await db.query(sql, [ven_id_venda, ven_cliente, ven_datavenda, ven_valor_total, ven_funcionario, ven_pagamento ])
}

const sql_delete =
`delete from vendas
where ven_id_venda = $1`

const deletevendas = async (params) => {
    const { ven_id_venda } = params
    await db.query(sql_delete, [ven_id_venda])
}

const patchvendas = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e != 'ven_id_venda' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update venda set ${fields} where ven_id_venda = ${params['ven_id_venda']}`
    db.query(sql);
}

module.exports.getvendas = getvendas;
module.exports.posvendas = postvendas;
module.exports.deletevendas = deletevendas;
module.exports.patchvendas = patchvendas;
