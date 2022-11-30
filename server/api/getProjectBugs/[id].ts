import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");

function getBugs(uuid: String) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM bugs WHERE project = '${uuid}'`, (err, rows) => {
      resolve(rows);
    });
  });
}

export default defineEventHandler(async (event) => {
  const bugs = await getBugs(event.context.params.id);
  return bugs;
});
