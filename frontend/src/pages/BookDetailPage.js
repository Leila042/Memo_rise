import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = () => {
      console.log(`Fetching book with ID: ${id}`);
      axios.get(`http://localhost:3000/api/books/${id}`)
        .then(response => {
          console.log('Book data received:', response.data);
          setBook(response.data);
        })
        .catch(error => {
          console.error('Error fetching the book:', error);
          setError('Erreur lors de la récupération du livre');
        });
    };

    fetchBook();
  }, [id]);

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  if (!book) {
    return <p className="text-center">Chargement...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">{book.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={book.thumbnail_url} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-8">
          <h3>Auteur: {book.author}</h3>
          <p>{book.description}</p>
          <p><strong>Prix: {book.price}€</strong></p>
          <p><strong>Stock: {book.stock_quantity}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
