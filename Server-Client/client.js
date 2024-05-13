// client.js
const net = require('net');

const client = new net.Socket();

const PORT = process.env.PORT || 8080;
const HOST = '127.0.0.1';

client.connect(PORT, HOST, () => {
    console.log('Conectado al servidor');

    // Enviar mensaje al servidor
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('Mensaje del servidor:', data.toString());
});

client.on('close', () => {
    console.log('Conexión cerrada');
});
