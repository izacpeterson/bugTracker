const express = require("express");
const app = express();
const sqlite = require("sqlite3").verbose();
const cors = require("cors");
const { exec } = require("child_process");
const { v4 } = require("uuid");
const history = require("connect-history-api-fallback");
const path = require("path");

const fs = require("fs");
const util = require("util");

const log_file = fs.createWriteStream(__dirname + "/debug.log", { flags: "a" });
const log_stdout = process.stdout;

console.log = function (d) {
  log_file.write(util.format(d) + "\n");
  log_stdout.write(util.format(d) + "\n");
};

app.use(cors());

app.use(express.json());
app.use(express.static("../app/dist"));

let fake_data = false;

let db = new sqlite.Database(fake_data ? "./data/db_fake_data.db" : "./data/db.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.log(err);
});

// let db = new sqlite.Database("./data/db_fake_data.db", sqlite.OPEN_READWRITE, (err) => {
//   if (err) console.log(err);
// });

function createTable() {
  db.exec("CREATE TABLE 'bugs' ('title' VARCHAR, 'description' VARCHAR, 'reporter' VARCHAR, 'assigned' VARCHAR, 'status' VARCHAR, 'timestamp' VARCHAR DEFAULT CURRENT_TIMESTAMP, uuid);");
}
// createTable();

app.get("/api/test", (req, res) => {
  console.log("USR Connected");
  res.json({ msg: "Hello World!" });
});

//get all bugs
app.get("/api/bugs", (req, res) => {
  console.log("BUGS");
  db.all("SELECT *, rowid FROM bugs", (err, rows) => {
    if (err) console.log(err);
    res.json(rows);
  });
});

//get bug by uuid
app.get("/api/bug", (req, res) => {
  let uuid = req.query.uuid;
  console.log(uuid);
  db.all(`SELECT * FROM bugs WHERE uuid = '${uuid}'`, (err, rows) => {
    res.json(rows[0]);
  });
});

//add bug
app.post("/api/report", (req, res) => {
  console.log(req.body);

  db.exec(`
    insert into bugs(title, description, reporter, status, uuid)
    values ('${req.body.bug}', '${req.body.description}', '${req.body.uid}', 'new', '${v4()}')
  `);

  res.send("Thank you");
});

//update bug status
app.get("/api/status", (req, res) => {
  db.exec(`
    UPDATE bugs
    SET status = '${req.query.status}'
    WHERE uuid = '${req.query.uuid}'
  `);
  res.send("Thank you");
});

//update bug assignee
app.get("/api/assign", (req, res) => {
  console.log(req.query);
  db.exec(
    `
    UPDATE bugs
    SET assigned = '${req.query.user}'
    WHERE uuid = '${req.query.uuid}'
  `,
    (err) => {
      console.log(err);
    }
  );
  res.send("Thank you");
});

//reset db
app.get("/api/reset", (req, res) => {
  db.exec("DELETE FROM bugs");
});

app.get("/api/deploy", (req, res) => {
  exec("sh ../build.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`Exec error: ${error}`);
    }
  });
  res.send("DEPLOYMENT Started: https://bugs.izacpeterson.com");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../app/index.html"), function (err) {
    if (err) {
      res.send(__dirname);
    }
  });
});

app.listen(8082, () => {
  console.log("server up");
});
