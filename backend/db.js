const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce-kecil',
    password: 'postgres',  // Sesuaikan dengan password PostgreSQL kamu
    port: 5432,
});

module.exports = pool;