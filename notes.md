# Udemy Chat App Notes

## On
- `io.on` is generally only for connection

## Emit
- `io.emit` emits to all connections
- `socket.emit` emits to one connection
- `socket.broadcast` sends messages to all but the socket

## Created At
- Better to do that server side to prevent spoofing.

## Acknowledgement
- It lets the client know that the request was successful. No has to be sent back.
- Need a callback function defined on client and the backend needs to call `callback()`.
