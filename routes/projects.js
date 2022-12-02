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
  db.run("CREATE TABLE IF NOT EXISTS projects (name TEXT, description TEXT, owner TEXT, uuid TEXT)");
} else {
  console.log("DEV DB");
  db = new sqlite3.Database(":memory:");
  db.run("CREATE TABLE projects(name TEXT, description TEXT, owner TEXT, uuid TEXT)", (err) => {
    if (err) {
      console.log(err);
    } else {
      addTestData();
    }
  });
}

function addTestData() {
  let testValues = JSON.parse(fs.readFileSync("./mockData/projects.json"));
  testValues.forEach((project) => {
    const query = "INSERT INTO projects(name, description, owner, uuid) VALUES(?,?,?,?)";
    const values = [project.name, project.description, project.owner, project.uuid];
    db.run(query, values);
  });
}

router.get("/new", (req, res) => {
  const uuid = uuidv4();
  const query = "INSERT INTO projects(name, description, owner, uuid) VALUES(?,?,?,?)";
  const values = [req.query.name, req.query.description, req.query.owner, uuid];

  db.run(query, values, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(uuid);
    }
  });
});

function getBugCount(uuid) {
  return new Promise((resolve, reject) => {
    const query = "SELECT COUNT(*) FROM bugs WHERE project = ? AND status = 'New'";
    db.get(query, [uuid], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row["COUNT(*)"]);
      }
    });
  });
}

function getTodoCount(uuid) {
  return new Promise((resolve, reject) => {
    const query = "SELECT COUNT(*) FROM todos WHERE project = ? AND status = 'New'";
    db.get(query, [uuid], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row["COUNT(*)"]);
      }
    });
  });
}

function addStats(rows) {
  return new Promise((resolve, reject) => {
    rows.forEach(async (row, index) => {
      rows[index].bugCount = await getBugCount(row.uuid);
      rows[index].todoCount = await getTodoCount(row.uuid);
      console.log(row);
    });

    console.log(rows);
  });
}

router.get("/project/:id", async (req, res) => {
  let uuid = req.params.id;

  const query = "SELECT * FROM projects WHERE uuid = ?";

  let project = {};

  db.all(query, req.params.id, async (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      project = rows[0];
      project.todoCount = await getTodoCount(uuid);
      project.bugCount = await getBugCount(uuid);
      res.send(project);
    }
  });
});

router.get("/myProjects/:id", (req, res) => {
  const query = "SELECT * FROM projects WHERE owner = ?";
  db.all(query, req.params.id, async (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      await Promise.all(
        rows.map(async (row, index) => {
          rows[index].todoCount = await getTodoCount(row.uuid);
          rows[index].bugCount = await getBugCount(row.uuid);
        })
      );
      res.send(rows);
    }
  });
});

router.get("/all", (req, res) => {
  const query = "SELECT * FROM projects";
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

router.get("/stats", (req, res) => {
  const bugQuery = "SELECT COUNT(*) FROM bugs WHERE project = ?";
  db.run(bugQuery, req.query.project, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
