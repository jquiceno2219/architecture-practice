// server.js
const net = require('net');

const PORT = process.env.PORT || 8080;

const server = net.createServer();

const clients = [];

server.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

    clients.push(socket);

    socket.on('data', (data) => {x
        const message = data.toString().trim();
        console.log('Mensaje recibido:', message);
        broadcastMessage(message, socket);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado:', socket.remoteAddress, socket.remotePort);
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});

function broadcastMessage(message, senderSocket) {
    clients.forEach((client) => {
        if (client !== senderSocket) {
            client.write(message + '\n');
        }
    });
}

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
