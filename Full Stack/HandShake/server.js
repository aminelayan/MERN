const express = require ('express');
const app = express();

const server =app.listen(8000 , () => console.log("The Server is All fired on Tanas 8000"));

const io = require('socket.io')(server,{cors:true})

io.on ("connection" ,socket => {
    console.log(socket.id);
    socket.on("Tanas",data =>{
        io.emit("Tanas",data);
    });
});