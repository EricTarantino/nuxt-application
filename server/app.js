const app = require('express')();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const usersDB = require("../utils/users")();

/*
io.on("connection", (socket) => {
    console.log("connection");
    socket.on("createUser", (user) => {      
    });  
});
*/

// socket layer

module.exports = {
    app,
    server
};