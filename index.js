const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello from MemoRise Ecommerce Backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
