const express = require('express');
const connection = require('../database'); 
require('dotenv').config();

const router = express.Router();

// Récupération des livres
router.get('/', (req, res) => {
  const { category, author, minPrice, maxPrice } = req.query;
  let query = "SELECT * FROM books WHERE 1 = 1";
  if (category) query += ` AND category = '${category}'`;
  if (author) query += ` AND author = '${author}'`;
  if (minPrice) query += ` AND price >= ${minPrice}`;
  if (maxPrice) query += ` AND price <= ${maxPrice}`;

  console.log('SQL Query:', query); 

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    res.json(results);
  });
});

// Récupération des livres commandés par un utilisateur
router.get('/ordered/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT books.*
    FROM books
    JOIN order_details ON books.book_id = order_details.book_id
    JOIN orders ON order_details.order_id = orders.order_id
    WHERE orders.user_id = ?
  `;

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM books WHERE book_id = ?';
  
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête SQL:', err);
        return res.status(500).json({ message: "Erreur interne du serveur" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Livre non trouvé" });
      }
      res.json(results[0]);
    });
  });

module.exports = router;
