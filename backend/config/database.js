const mysql = require('mysql2');
require('dotenv').config(); 

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'memo_rise'
});

connection.connect((err) => {
  if (err) {
    return console.error('Erreur de connexion: ' + err.message);
  }
  console.log('Connecté à la base de données MySQL.');
});

module.exports = connection;