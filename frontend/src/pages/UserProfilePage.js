import React from 'react';
import UserProfile from '../components/UserProfile';
import UserOrders from '../components/UserOrders';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate

const UserProfilePage = ({ userId, token }) => {
  const navigate = useNavigate(); // Création de l'instance de navigate

  const handleLogout = () => {
    // Effacer le token d'authentification du stockage local
    localStorage.removeItem('authToken'); // Assurez-vous que le token est stocké avec la clé 'authToken'
    navigate('/login'); // Utilisez navigate pour rediriger
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-primary">Profil</h1>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Informations</div>
            <div className="card-body bg-light text-dark">
              <UserProfile userId={userId} token={token} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Commandes</div>
            <div className="card-body bg-light text-dark">
              <UserOrders userId={userId} token={token} />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleLogout} className="btn btn-danger">Déconnexion</button> {/* Bouton de déconnexion */}
    </div>
  );
};

export default UserProfilePage;
