const express = require("express");

const db = require("../data/dbConfig.js");
const PostRouter = require("../posts/post-router.js");
const server = express();
server.use(express.json());
server.use("/api/accounts", PostRouter);


server.get("/", (req, res) => {
    res.status(200).json("HomePage");
  });
module.exports = server;
