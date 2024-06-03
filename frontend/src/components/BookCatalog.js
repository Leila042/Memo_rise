import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get('http://localhost:3000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des livres');
      });
  };

  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4 text-primary">Catalogue de Livres</h2>
    {error && <p className="text-danger text-center">{error}</p>}
    <div className="row">
      {books.map(book => (
        <div key={book.book_id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Link to={`/book/${book.book_id}`} className="text-decoration-none">
            <div className="card h-100">
              <img src={book.thumbnail_url} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text"><small className="text-muted">Auteur: {book.author}</small></p>
                <p className="card-text"><strong>Prix: {book.price}€</strong></p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
};


export default BookCatalog;
