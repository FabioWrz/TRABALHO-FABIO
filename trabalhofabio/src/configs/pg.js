const { Pool } = require('pg')

const pool = new Pool({
    user:'admin',
    host: 'bancofabio',
    database: 'trabalhofabio',
    password: 'admin',
    port: 5432,
})

module.exports = { query: (text, params) => pool.query(text, params)}