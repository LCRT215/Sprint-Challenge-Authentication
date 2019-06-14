const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const configureRoutes = require("../config/routes.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

// sanity check
server.get("/", (req, res) => {
  res.send(`<h2> I'm runninnnnnnnnnnn</h2>`);
});

module.exports = server;
