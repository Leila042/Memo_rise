import React from 'react';
import UserProfile from '../components/UserProfile';
import UserOrders from '../components/UserOrders';

const UserProfilePage = ({ userId, token }) => {
  return (
    <div>
      <h1>Profil Utilisateur et Commandes</h1>
      <UserProfile userId={userId} token={token} />
      <UserOrders userId={userId} token={token} />
    </div>
  );
};

export default UserProfilePage;
