const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const test = require("./routes/test.js");
const projects = require("./routes/projects.js");

const app = express();
app.use(express.json());

app.use("/tests", test);
app.use("/projects", projects);

app.listen(process.env.PORT, () => {
  console.log("Server up on: " + process.env.PORT);
});
