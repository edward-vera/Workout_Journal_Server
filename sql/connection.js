// get the client
const mysql = require('mysql2');

require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;
// Create the connection pool. The pool-specific settings are the defaults

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

module.exports = pool;