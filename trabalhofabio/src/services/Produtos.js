const db = require('../configs/pg')

const getProdutos = async () => {
    let sql = 'select * from produtos';
    let Produtos = {};

    await db.query(sql)
        .then(ret => Produtos = {total: ret.rows.length, Produtos: ret.rows})
        .catch(err => Produtos = err.stack);

    return Produtos;
}

const sql =
`insert into Produtos (pro_id_produto, pro_nome, pro_estoque, pro_fornecedor, pro_marca)
values ($1, $2, $3, $4, $5) `

const postProdutos = async (params) => {
    const {  pro_id_produto, pro_nome, pro_estoque, pro_fornecedor, pro_marca } = params
    await db.query(sql, [ pro_id_produto, pro_nome, pro_estoque, pro_fornecedor, pro_marca ])
}

const sql_delete =
`delete from Produtos
where pro_id_produto = $1`

const deleteProdutos = async (params) => {
    const { pro_id_produto } = params
    await db.query(sql_delete, [pro_id_produto])
}

const patchProdutos = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e != ' pro_id_produto' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update Produtos set ${fields} where  pro_id_produto = ${params[' pro_id_produto']}`
    db.query(sql);
}

module.exports.getProdutos = getProdutos;
module.exports.postProdutos = postProdutos;
module.exports.deleteProdutos = deleteProdutos;
module.exports.patchProdutos = patchProdutos;