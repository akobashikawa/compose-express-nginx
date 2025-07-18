const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cors middleware
app.use(cors());

app.get('/hello', (req, res) => {
    const name = req.query.name?.trim() || 'World';
    if (name.length > 50) {
        return res.status(400).json({ error: 'Name is too long' });
    }
    res.json({ message: `Hello, ${name}!` });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
