const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();

// Configuration CORS
app.use(cors({
    origin: 'http://localhost:3001', // Autoriser les requêtes de ce domaine
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Permettre les cookies
    optionsSuccessStatus: 200
}));

app.use(express.json()); // Parsing de JSON avant les routes
app.use('/api/users', userRoutes); // Routes utilisateur

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
