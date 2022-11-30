import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");
import { v4 as uuidv4 } from "uuid";

function reportBug(name: String, description: String, project: String) {
  return new Promise((resolve, reject) => {
    let uuid = uuidv4();
    db.run(`INSERT INTO BUGS (name, description, project, status, uuid) VALUES (?, ?, ?, ?, ?)`, [name, description, project, "new", uuid], (err) => {
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
  const uuid = await reportBug(body.name, body.description, body.project);
  return uuid;
});
