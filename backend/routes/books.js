const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/', booksController.getAllBooks);
router.get('/ordered/:userId', booksController.getBooksOrderedByUser);
router.get('/:id', booksController.getBookById);

module.exports = router;