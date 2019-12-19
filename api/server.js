const express = require("express");

const Users = require("../users/usersModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {

});

server.get("/users", (req, res) => {

});

server.post("/users", (req, res) => {

});


server.delete("/users/:id", (req, res) => {

});

module.exports = server;
