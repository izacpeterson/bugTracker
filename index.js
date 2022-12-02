const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

//routes
const test = require("./routes/test.js");
const projects = require("./routes/projects.js");
const todos = require("./routes/todos.js");
const bugs = require("./routes/bugs.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("./app/dist"));

app.use("/api/tests", test);
app.use("/api/projects", projects);
app.use("/api/todos", todos);
app.use("/api/bugs", bugs);

app.listen(process.env.PORT, () => {
  console.log("Server up on: " + process.env.PORT);
});
