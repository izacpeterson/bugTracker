const express = require("express");
const dotenv = require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const history = require("connect-history-api-fallback");
const http = require("http");
const { Server } = require("socket.io");

//routes
const test = require("./routes/test.js");
const projects = require("./routes/projects.js");
const todos = require("./routes/todos.js");
const bugs = require("./routes/bugs.js");
const chats = require("./routes/chats.js");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  io.emit("newMessage", {
    message: "Test Message",
    user: "asdf",
    name: "Test User",
    project: "30320f7a-48ab-44b8-962f-089d66f127a5",
  });
  socket.on("newMessage", (msg) => {
    socket.broadcast.emit("newMessage", msg);
  });
});

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/app/dist/index.html");
// });
// app.use(history());

const buildLocation = "./app/dist";
app.use(express.static(buildLocation));
// app.use((req, res, next) => {
//   if (!req.originalUrl.includes(buildLocation)) {
//     res.sendFile(`${__dirname}/${buildLocation}/index.html`);
//   } else {
//     next();
//   }
// });

app.use("/api/tests", test);
app.use("/api/projects", projects);
app.use("/api/todos", todos);
app.use("/api/bugs", bugs);
app.use("/api/chats", chats);

// app.get("/*", (req, res) => {
//   console.log(req);
//   res.redirect("/index.html");
// });

server.listen(process.env.PORT, () => {
  console.log("Server up on: " + process.env.PORT);
});
