import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfilePage from './pages/UserProfilePage';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';



const App = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState('');

  // Gère la connexion de l'utilisateur et stocke son token
  const handleLogin = (token) => {
    // Décodez le token pour obtenir l'ID utilisateur, ici un exemple statique
    setUserId(1);  // ID utilisateur statique pour simplifier
    setToken(token);
  };

  return (
    <Router>
      <div className="App">
        <Navbar userId={userId} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route
              path="/profile"
              element={userId ? <UserProfilePage userId={userId} token={token} /> : <p>Veuillez vous connecter</p>}
            />
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
