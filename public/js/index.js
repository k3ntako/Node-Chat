let socket = io();

socket.on("connect", function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    to: 'jyen@example.com',
    text: 'Hey, this is Kentaro'
  })
})

socket.on('disconnect', function () {
  console.log('disconnected from server')
})

//1st argument = custom name
socket.on('newMessage', function (message){
  console.log("newMessage", message);
})
