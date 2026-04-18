const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor HTTPS funcionando correctamente 🔒');
});

// Leer clave privada y certificado
const options = {
    key: fs.readFileSync('private_key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

// Crear servidor HTTPS
https.createServer(options, app).listen(8080, () => {
    console.log('Servidor HTTPS ejecutándose en https://localhost:8080');
});