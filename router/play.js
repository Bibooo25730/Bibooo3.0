const express = require('express');
const { createServer }  = require('http');
const httpsever = createServer();
const { Server } = require("socket.io")
const io = new Server(httpsever, {
  cors:true
});

const Router = express.Router();
const play = require("../server/playdesc");
Router.get("/Stardesc",play.Stardesc);
io.on("connection", (socket) => {
  socket.on('chat', (msg) => {
    socket.broadcast.emit('servermsg',msg);
  });
  });
httpsever.listen(3000,()=>{
    console.log('listening on *:3000');
})

module.exports = Router