const express = require("express");
const app = express();
const sqlite = require("sqlite3").verbose();
const cors = require("cors");
app.use(cors());
app.use(express.json());

let db = new sqlite.Database("./data/db.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.log(err);
});

app.get("/api/test", (req, res) => {
  console.log("USR Connected");
  res.json({ msg: "Hello World!" });
});
app.post("/api/report", (req, res) => {
  console.log(req.body);

  db.exec(`
    insert into bugs(title, description, reporter, status)
    values ('${req.body.bug}', '${req.body.description}', '${req.body.uid}', 'new')
  `);

  res.send("Thank you");
});

app.get("/api/reset", (req, res) => {
  db.exec("DELETE FROM bugs");
});

app.listen(8082, () => {
  console.log("server up");
});
