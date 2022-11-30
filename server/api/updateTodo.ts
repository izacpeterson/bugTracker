import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");

function updateBug(uuid: String, status: String) {
  console.log(uuid, status);
  return new Promise((resolve, reject) => {
    db.run(`UPDATE todo SET status = ? WHERE uuid = ?`, [status, uuid], (err) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(uuid);
      }
    });
  });
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const uuid = await updateBug(body.uuid, body.status);
  return uuid;
});
