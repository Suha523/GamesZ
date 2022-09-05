const express = require('express');
const app = express();
const http = require('http'); 
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['Get', 'Post'],
    },
});

io.on('connection', (socket) => {
    // listen events just when the user connected with server //socket: user`s info

    // console.log(`user connected ${socket.id}`);
    socket.on('joinRoom', (data) => {
        socket.join(data);
        console.log(`user with id : ${socket.id},  joined room: ${data}`);
    });

    // socket.on("sendMessage",  (data) => {
    //     console.log(data);
    //     socket.to(data.room).emit('receive_message', data)

    // })
    socket.on('sendMessage', (data) => {
        socket.to(data.room).emit('receive_message', data);
    });
      socket.on("sendSquare", data => {
        socket.to(data.room).emit("receive_square", data);
      });

    socket.on('disconnect', () => {
        //like close the tap
        console.log('user disconnected', socket.id);
    });
});


server.listen(3002, () => {
    console.log('server running');
});
