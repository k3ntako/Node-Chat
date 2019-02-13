# Udemy Chat App Notes

## On
- `io.on` is generally only for connection

## Emit
- `io.emit` emits to all connections
- `socket.emit` emits to one connection
- `socket.broadcast` sends messages to all but the socket (current user)

## Created At
- Better to do that server side to prevent spoofing.

## Acknowledgement
- It lets the client know that the request was successful. No has to be sent back.
- Need a callback function defined on client and the backend needs to call `callback()`.

## Join/Leave
- `socket.join()` takes in a string.
  - It can be used to join private chats
- `socket.leave()` takes the same string, but does the opposite.

## Emit to
- `io.to(ROOM NAME).emit` emits to everyone in that private room
- `socket.to(ROOM NAME).broadcast` emits to everyone in that private room except for the socket
- `socket.emit` doesn't need emit, because it already targets just that one user
