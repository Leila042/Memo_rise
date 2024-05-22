import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId, token }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId, token]);

  return (
    <div>
      <h2>Profil Utilisateur</h2>
      {error ? <p>{error}</p> : (
        <div>
          <p>Nom d'utilisateur: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Rôle: {user.role}</p>
          <p>Date d'inscription: {user.created_at}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
