const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');
require('dotenv').config();

exports.register = async ({ username, email, password }) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, "user")';
  return new Promise((resolve, reject) => {
    connection.query(query, [username, email, hashedPassword], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.login = async ({ email, password }) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [email], (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error("Utilisateur non trouvé."));
      const user = results[0];
      if (!bcrypt.compareSync(password, user.password_hash)) return reject(new Error("Mot de passe incorrect."));
      const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      resolve(token);
    });
  });
};

exports.getProfile = async (userId) => {
  const query = 'SELECT username, email, role, created_at FROM users WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [userId], (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error("Utilisateur non trouvé."));
      resolve(results[0]);
    });
  });
};

exports.getOrders = async (userId) => {
  const query = 'SELECT * FROM orders WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};