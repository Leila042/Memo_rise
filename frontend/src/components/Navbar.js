import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userId, onLogout }) => {
  const navigate = useNavigate();

  // Fonction qui gère la déconnexion
  const logout = () => {
    onLogout(); // Appelle la fonction onLogout passée en props
    navigate('/login'); // Redirection vers la page de connexion après la déconnexion
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MemoRise
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            {!userId ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Connexion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Inscription
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profil
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="nav-link btn btn-link" style={{ border: 'none', background: 'none', color: 'inherit' }}> {/* Modification ici */}
                    Déconnexion
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
