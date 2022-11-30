const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();

//routes
const test = require("./routes/test.js");
const projects = require("./routes/projects.js");
const todos = require("./routes/todos.js");

const app = express();
app.use(express.json());

app.use("/api/tests", test);
app.use("/api/projects", projects);
app.use("/api/todos", todos);

app.listen(process.env.PORT, () => {
  console.log("Server up on: " + process.env.PORT);
});
