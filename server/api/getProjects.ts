import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");

function getProject(uuid: String) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM projects WHERE uuid = '${uuid}'`, (err, rows) => {
      resolve(rows);
    });
  });
}

export default defineEventHandler(async (event) => {
  const projects = await getProject(event.context.params.id);
  console.log(projects);
  return projects;
});
