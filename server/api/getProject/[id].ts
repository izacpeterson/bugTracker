import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");

function getProjects(id: String) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM projects WHERE uuid = '${id}'`, (err, rows) => {
      resolve(rows);
    });
  });
}

export default defineEventHandler(async (event) => {
  //   console.log(event.context.params.id);
  const projects = await getProjects(event.context.params.id);
  return projects;
});