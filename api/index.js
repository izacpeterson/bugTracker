const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db.db')
const { v4: uuidv4 } = require('uuid')
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/createProject', (req, res) => {
  console.log(req.body)

  //   db.run(
  //     `CREATE TABLE IF NOT EXISTS 'projects' ('name' TEXT NOT NULL, 'owner' TEXT NOT NULL, 'users' TEXT, 'uuid' TEXT, description TEXT, PRIMARY KEY('uuid'));`,
  //     (err) => {
  //       if (err) {
  //         console.log(err)
  //         res.send(err)
  //       } else {
  //         // res.send('Table created')
  //       }
  //     }
  //   )
  let uuid = uuidv4()
  db.run(
    `INSERT INTO projects (name, owner, uuid, description) VALUES (?, ?, ?, ?)`,
    [req.body.name, req.body.owner, uuid, req.body.description],
    function (err) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        res.send(uuid)
      }
    }
  )
})

app.get('/getProjects', (req, res) => {
  db.all('SELECT * FROM projects', (err, rows) => {
    res.send(rows)
  })
})

app.get('/getProject/:uuid', (req, res) => {
  db.all(
    `SELECT * FROM projects WHERE uuid = '${req.params.uuid}'`,
    (err, rows) => {
      res.send(rows)
    }
  )
})

app.post('/reportBug', (req, res) => {
  let uuid = uuidv4()
  db.run(
    `INSERT INTO BUGS (name, description, project, status, uuid) VALUES (?, ?, ?, ?, ?)`,
    [req.body.name, req.body.description, req.body.project, 'new', uuid],
    function (err) {
      if (err) {
        console.log(err)
        res.send(err)
      } else res.send(uuid)
    }
  )
})

app.get('/getProjectBugs/:project', (req, res) => {
  db.all(
    `SELECT * FROM bugs WHERE project = '${req.params.project}'`,
    (err, rows) => {
      res.send(rows)
    }
  )
})

app.get('/dropTables', (req, res) => {
  db.run('DROP TABLE projects', (err) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.send('success')
    }
  })
})

app.get('/test', function (req, res) {
  res.send('Test successful')
})

export default {
  path: '/api',
  handler: app,
}
