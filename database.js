// const databaseName = process.env.NODE_ENV === 'todo'
const pgp = require('pg-promise')()
const CONNECTION_STRING = "pg://melissamorel@localhost:5432/todo"
const db = pgp( CONNECTION_STRING )

const getListos = () =>
  db.any( "SELECT * FROM listo" )

// Equivalent to above
// function getListos() {
//   return db.any( "SELECT * FROM listo" )
// }

module.exports = { getListos }



// var pg = require('pg')
// var db = pgp(connectionString)
// var client = new pg.Client(conString)
// client.connect()
// var query = client.query("SELECT task FROM listo ORDER BY id")
//
// query.on("row", function(row, result) {
//   result.addRow(row)
// })
//
// query.on("end", function(result) {
//   console.log(JSON.stringify(result.rows, null, ""))
//   client.end()
// })
