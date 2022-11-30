const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let db;
if (process.env.prod == "true") {
  console.log("PROD");
  db = new sqlite3.Database("./db.db");
  db.run(
    "CREATE TABLE IF NOT EXISTS projects (name TEXT, description TEXT, owner TEXT, uuid TEXT)"
  );
} else {
  console.log("DEV DB");
  db = new sqlite3.Database(":memory:");
  db.run(
    "CREATE TABLE projects (name TEXT, description TEXT, owner TEXT, uuid TEXT)"
  );
}

router.get("/new", (req, res) => {
  const uuid = uuidv4();
  const query =
    "INSERT INTO projects(name, description, owner, uuid) VALUES(?,?,?,?)";
  const values = [req.query.name, req.query.description, req.query.owner, uuid];
  db.run(query, values);
  res.send(values);
});

router.get("/project/:id", (req, res) => {
  const query = "SELECT * FROM projects WHERE uuid = ?";
  db.all(query, req.params.id, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

router.get("/myProjects/:id", (req, res) => {
  const query = "SELECT * FROM projects WHERE owner = ?";
  db.all(query, req.params.id, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
