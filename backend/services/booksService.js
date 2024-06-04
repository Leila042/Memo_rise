const connection = require('../config/database');

const getAllBooks = (filters, callback) => {
  const { category, author, minPrice, maxPrice } = filters;
  let query = "SELECT * FROM books WHERE 1 = 1";
  if (category) query += ` AND category = '${category}'`;
  if (author) query += ` AND author = '${author}'`;
  if (minPrice) query += ` AND price >= ${minPrice}`;
  if (maxPrice) query += ` AND price <= ${maxPrice}`;

  connection.query(query, callback);
};

const getBooksOrderedByUser = (userId, callback) => {
  const query = `
    SELECT books.*
    FROM books
    JOIN order_details ON books.book_id = order_details.book_id
    JOIN orders ON order_details.order_id = orders.order_id
    WHERE orders.user_id = ?
  `;

  connection.query(query, [userId], callback);
};

const getBookById = (id, callback) => {
  const query = 'SELECT * FROM books WHERE book_id = ?';

  connection.query(query, [id], callback);
};

module.exports = {
  getAllBooks,
  getBooksOrderedByUser,
  getBookById,
};