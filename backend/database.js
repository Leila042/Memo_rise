const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'memo_rise'
});

connection.connect((err) => {
  if (err) {
    return console.error('Erreur de connexion: ' + err.message);
  }
  console.log('Connecté à la base de données MySQL.');
});

module.exports = connection;

