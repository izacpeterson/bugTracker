const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/api/test", (req, res) => {
  console.log("USR Connected");
  res.json({ msg: "Hello World!" });
});

app.listen(8082, () => {
  console.log("server up");
});
