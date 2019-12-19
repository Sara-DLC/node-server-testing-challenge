const express = require("express");

const Users = require("../users/usersModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "working", dbenv: process.env.DB_ENV });
});


server.post("/", (req, res) => {
    Users.insert(req.body)
    .then(([id]) => {
    res.status(201).json(id);
    })
    .catch(error => {
    res.status(500).json(error);
    });
});


server.delete('/:id', (req, res) => {
    const { id } = req.params;

Users.remove(id)
.then(deleted => {
    if (deleted) {
    res.json({ removed: deleted });
    } else {
    res.status(404).json({ message: 'Could not find user' });
    }
})
.catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
});
});

module.exports = server;
