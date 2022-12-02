const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let db;
if (true) {
  console.log("PROD");
  db = new sqlite3.Database("./db.db");
  db.run("CREATE TABLE IF NOT EXISTS chats (message TEXT, user TEXT, name TEXT, project TEXT)");
}

router.get("/add", (req, res) => {
  const uuid = uuidv4();
  const query = "INSERT INTO chats(message, user, name, project) VALUES(?, ?, ?, ?)";
  const values = [req.query.message, req.query.user, req.query.name, req.query.project];
  db.run(query, values, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("chat added");
    }
  });
});
router.get("/get", (req, res) => {
  const query = "SELECT * FROM chats WHERE project = ?";
  const values = [req.query.project];
  db.all(query, values, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
