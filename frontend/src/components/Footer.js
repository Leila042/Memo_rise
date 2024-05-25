import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 bg-light text-dark text-center">
      <div className="container">
        <p className="mb-0">© 2024 MemoRise. Tous droits réservés.</p>
        <p className="mb-0">
          <Link to="/contact" className="text-dark">Contactez-nous</Link> | 
          <Link to="/faq" className="text-dark ml-2">FAQ</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
