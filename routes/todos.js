const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let db;
if (process.env.prod == "true") {
  console.log("PROD");
  db = new sqlite3.Database("./db.db");
  db.run("CREATE TABLE IF NOT EXISTS todos (name TEXT, uuid TEXT, status TEXT, project TEXT)");
} else {
  console.log("DEV DB");
  db = new sqlite3.Database(":memory:");
  db.run("CREATE TABLE todos (name TEXT, uuid TEXT, status TEXT, project TEXT)", (err) => {
    if (err) {
      console.log(err);
    } else {
      addTestData();
    }
  });
}

function addTestData() {
  let testValues = JSON.parse(fs.readFileSync("./mockData/todos.json"));

  testValues.forEach((todo) => {
    let query = "INSERT INTO todos (name, project, uuid, status) VALUES(?, ?, ?, ?)";
    let values = [todo.name, todo.project, todo.uuid, todo.status];

    db.run(query, values);
  });
}

//GET ALL TODOS
router.get("/all", (req, res) => {
  const query = "SELECT * FROM todos";
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

//GET TODOS BY PROJECT
router.get("/project/:id", (req, res) => {
  const query = "SELECT * FROM todos WHERE project = ?";
  db.all(query, req.params.id, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

//ADD TODO
router.get("/add", (req, res) => {
  let uuid = uuidv4();
  const query = "INSERT INTO todos(name, status, project, uuid) VALUES(?, ?, ?, ?)";
  const values = [req.query.name, "new", req.query.project, uuid];
  db.run(query, values, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(uuid);
    }
  });
});

//UPDATE TODO
router.get("/update", (req, res) => {
  const query = "UPDATE todos SET status = ? WHERE uuid = ?";
  db.run(query, [req.query.status, req.query.uuid], (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Updated");
    }
  });
});

//DELETE TODO
router.get("/delete", (req, res) => {
  const query = "DELETE FROM todos WHERE uuid = ?";
  db.run(query, req.query.uuid, (err) => {
    if (err) {
      res.send(err);
    }
  });
});

module.exports = router;
