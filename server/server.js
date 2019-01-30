const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));

//io.on is generally only for connection
io.on('connection', (socket) => {
  console.log("new user connected");

  //socket emits to one connection
  socket.emit('newMessage', {
    from: "Mike@example.com",
    text: "Hey I think you're cool",
    createdAt: new Date()
  })

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  })

  socket.on('disconnect', () => {
    console.log("user disconnected");
  })
})

server.listen(port, () => {
  console.log(`Started on port ${port}.`);
});
