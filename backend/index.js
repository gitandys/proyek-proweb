// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
});

// Route POST
app.post('/data', (req, res) => {
    const { nama } = req.body;
    res.send(`Data diterima: ${nama}`);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});