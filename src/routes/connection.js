const mysql = require('mysql2/promise');
// Crear una conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',     
    password: '', 
    database: 'inventario', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  module.exports = pool;