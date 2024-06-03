const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../database'); 
const authenticateToken = require('../authenticateToken'); 
require('dotenv').config();

const router = express.Router();

// Inscription d'un nouvel utilisateur
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, "user")';

  connection.query(query, [username, email, hashedPassword], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur lors de l'inscription de l'utilisateur." });
    }
    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  });
});

// Connexion d'un utilisateur
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';

  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur lors de la connexion." });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const user = results[0];
    if (!bcrypt.compareSync(password, user.password_hash)) {
      return res.status(401).json({ message: "Mot de passe incorrect." });
    }

    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Connexion réussie.", token });
  });
});

// Récupération du profil utilisateur avec authentification
router.get('/profile/:userId', authenticateToken, (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT username, email, role, created_at FROM users WHERE user_id = ?';

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur lors de la récupération du profil." });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.json({ user: results[0] });
  });
});

// Récupération des commandes de l'utilisateur avec authentification
  router.get('/orders/:userId', authenticateToken, (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT * FROM orders WHERE user_id = ?';

    connection.query(query, [userId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Erreur lors de la récupération des commandes." });
      }
      res.json({ orders: results });
    });


    // Exécuter la requête sur la base de données ici
    console.log('SQL Query:', query); // Log de la requête SQL finale

    database.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', err);
            return res.status(500).json({ message: "Erreur interne du serveur" });
        }
        res.json(results);
    });



});

module.exports = router;
