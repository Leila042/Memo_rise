import React, { useState } from 'react';
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';
import UserOrders from './components/UserOrders';
import HomePage from './pages/HomePage';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState('');

  // Gère la connexion de l'utilisateur et stocke son token
  const handleLogin = (token) => {
    setUserId(1);  // ID utilisateur statique pour simplifier
    setToken(token);
  };

  return (
    <Router>
      <div className="App">
        <h1>MemoRise</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={userId ? <UserProfile userId={userId} token={token} /> : <p>Veuillez vous connecter</p>} />
          <Route path="/orders" element={userId ? <UserOrders userId={userId} token={token} /> : <p>Veuillez vous connecter</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
