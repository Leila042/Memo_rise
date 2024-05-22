const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users'); // Ajustez le chemin selon votre structure de dossiers

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

// Utiliser les routes des utilisateurs
app.use('/api/users', userRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

const cors = require('cors');
app.use(cors()); // Permet toutes les origines par défaut
