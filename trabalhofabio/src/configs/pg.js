const { Pool } = require('pg')

const pool = new Pool({
    user:'admin',
    host: 'localhost',
    database: 'trabalhofabio',
    password: 'admin',
    port: 5432,
})

module.exports = { query: (text, params) => pool.query(text, params)}