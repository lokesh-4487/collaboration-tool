const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("textChange", (data) => {
        socket.broadcast.emit("updateText", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
