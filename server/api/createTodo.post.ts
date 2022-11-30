import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");
import { v4 as uuidv4 } from "uuid";

function createToDo(name: String, project: String) {
  return new Promise((resolve, reject) => {
    let uuid = uuidv4();
    db.run(`INSERT INTO todo (name, project, status, uuid) VALUES (?, ?, ?, ?)`, [name, project, "new", uuid], (err) => {
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
  const uuid = await createToDo(body.name, body.project);
  return uuid;
});
