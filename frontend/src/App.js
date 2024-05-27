import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfilePage from './pages/UserProfilePage';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setUserId(1);  // ID utilisateur statique pour simplifier
    setToken(token);
  };

  const handleLogout = () => {
    setUserId(null);
    setToken('');
    localStorage.removeItem('authToken'); // Suppression du token de l'authentification
  };

  return (
    <Router>
      <div className="App">
        <Navbar userId={userId} onLogout={handleLogout} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={userId ? <UserProfilePage userId={userId} token={token} /> : <p>Veuillez vous connecter</p>} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
