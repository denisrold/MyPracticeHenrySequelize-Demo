const express = require("express");

const server = express();

server.get("/character", (req, res) => {
  res.send("informacion sobre todos los persoanjes");
});

module.exports = server;
