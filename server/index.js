const express = require("express");
const app = express();
const sqlite = require("sqlite3").verbose();
const cors = require("cors");
const { exec } = require("child_process");
const { v4 } = require("uuid");
const history = require("connect-history-api-fallback");
const path = require("path");

app.use(cors());

app.use(express.json());
app.use(express.static("../app/dist"));

// app.use(
//   history({
//     disableDotRule: true,
//     verbose: true,
//   })
// );

// app.use(express.static("../app/dist"));

let db = new sqlite.Database("./data/db.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.log(err);
});

// app.get("/", (req, res) => {
//   res.render("../app/dist/index.html");
// });

app.get("/api/test", (req, res) => {
  console.log("USR Connected");
  res.json({ msg: "Hello World!" });
});

app.get("/api/bugs", (req, res) => {
  console.log("BUGS");
  db.all("SELECT *, rowid FROM bugs", (err, rows) => {
    if (err) console.log(err);
    res.json(rows);
  });
});

app.post("/api/report", (req, res) => {
  console.log(req.body);

  db.exec(`
    insert into bugs(title, description, reporter, status, uuid)
    values ('${req.body.bug}', '${req.body.description}', '${req.body.uid}', 'new', '${v4()}')
  `);

  res.send("Thank you");
});

app.get("/api/status", (req, res) => {
  db.exec(`
    UPDATE bugs
    SET status = '${req.query.status}'
    WHERE uuid = '${req.query.uuid}'
  `);
  res.send("Thank you");
});

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
