import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RegisterForm.css';  

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password
      });
      alert('Inscription réussie!');
    } catch (err) {
      setError(err.response ? err.response.data.message : "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="register-form-container">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">S'inscrire</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="login-link">
        Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
