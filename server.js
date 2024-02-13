const express = require('express');
const app = express();
const Server = require('http').createServer(app);
const io = require('socket.io')(Server);

const port = 3000; 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
 
    socket.on('ChangedCode', (code) => {
        socket.broadcast.emit('NewCode', code);
    });

});

Server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});