const booksService = require('../services/booksService');

const getAllBooks = (req, res) => {
  const filters = req.query;

  booksService.getAllBooks(filters, (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    res.json(results);
  });
};

const getBooksOrderedByUser = (req, res) => {
  const { userId } = req.params;

  booksService.getBooksOrderedByUser(userId, (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    res.json(results);
  });
};

const getBookById = (req, res) => {
  const { id } = req.params;

  booksService.getBookById(id, (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête SQL:', err);
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }
    res.json(results[0]);
  });
};

module.exports = {
  getAllBooks,
  getBooksOrderedByUser,
  getBookById,
};