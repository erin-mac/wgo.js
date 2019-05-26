const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
var socketio = require('socket.io');

const server = app.listen(PORT, console.log(`listening on port ${PORT}`))

var io = socketio(server);

io.on('connection', (socket) => {
    console.log('A new client has connected!');
    console.log(socket.id);
    socket.on('disconnect', () => {
        console.log("Client disconnected");
        console.log(socket.id);
    });
    socket.on('turnRecieved', (data) => {
        socket.broadcast.emit('turn', console.log(data));
    });
});

app.use(express.static(path.join(__dirname, '../public')))

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '/public/index.html'))
})
