// Importación de módulos necesarios
const express = require('express');
const https = require('https');
const fs = require('fs');

// Creación de la aplicación principal
const app = express();

// Ruta principal del sitio
app.get('/', (req, res) => {
    res.send('Servidor HTTPS funcionando correctamente 🔒');
});

// Lectura de archivos del certificado SSL
const options = {
    key: fs.readFileSync('private_key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

// Inicio del servidor HTTPS en el puerto 8080
https.createServer(options, app).listen(8080, () => {
    console.log('Servidor HTTPS ejecutándose en https://localhost:8080');
});