import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.db");
import { v4 as uuidv4 } from "uuid";

function reportBug(name: String, description: String, owner: String) {
  return new Promise((resolve, reject) => {
    let uuid = uuidv4();
    db.run(`INSERT INTO projects (name, owner, uuid, description) VALUES (?, ?, ?, ?)`, [name, owner, uuid, description], function (err) {
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
  const uuid = await reportBug(body.name, body.description, body.owner);
  return uuid;
});
