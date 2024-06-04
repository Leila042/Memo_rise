import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/LoginForm.css';  

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password
      });
      onLogin(response.data.token); 
      navigate('/profile'); 
    } catch (err) {
      setError(err.response ? err.response.data.message : "Erreur de connexion");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">Se connecter</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="register-link">
        Vous n'avez pas de compte ? <Link to="/register">Inscrivez-vous</Link>
      </p>
    </div>
  );
};

export default LoginForm;
