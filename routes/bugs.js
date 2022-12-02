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
  db.run("CREATE TABLE IF NOT EXISTS bugs (name TEXT, description TEXT, uuid TEXT, status TEXT, project TEXT)");
} else {
  console.log("DEV DB");
  db = new sqlite3.Database(":memory:");
  db.run("CREATE TABLE IF NOT EXISTS bugs (name TEXT, description TEXT, uuid TEXT, status TEXT, project TEXT)", (err) => {
    if (err) {
      console.log(err);
    } else {
      //   addTestData();
      const query = "INSERT INTO bugs(name, description, status, project, uuid) VALUES(?, ?, ?, ?, ?)";
      const values = ["New Bug", "New bug description", "New", 1, uuidv4()];
      db.run(query, values);
    }
  });
}

//ADD BUG
router.get("/add", (req, res) => {
  const uuid = uuidv4();
  const query = "INSERT INTO bugs(name, description, status, project, uuid) VALUES(?, ?, ?, ?, ?)";
  const values = [req.query.name, req.query.description, "New", req.query.project, uuid];
  db.run(query, values, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(uuid);
    }
  });
});

//GET BUG BY PROJECT
router.get("/project/:id", (req, res) => {
  const query = "SELECT * FROM bugs WHERE project = ?";
  db.all(query, req.params.id, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

//UPDATE BUG STATUS
router.get("/update", (req, res) => {
  const query = "UPDATE bugs SET status = ? WHERE uuid = ?";
  const values = [req.query.status, req.query.uuid];
  db.run(query, values, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Updated");
    }
  });
});

//DELETE BUG
router.get("/delete", (req, res) => {
  const query = "DELETE FROM bugs WHERE uuid = ?";
  db.run(query, req.query.uuid, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Deleted");
    }
  });
});

module.exports = router;
