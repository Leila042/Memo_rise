const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books'); 
const authenticateToken = require('./middlewares/authenticateToken'); 


const app = express();

app.use(cors({
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
    optionsSuccessStatus: 200,
}));

app.use(express.json()); 
app.use('/api/users', userRoutes); 
app.use('/api/books', bookRoutes);
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
