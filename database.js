var databaseName = process.env.NODE_ENV === 'todo'
var pgp = require('pg-promise')();
var pg = require('pg');
var conString = "pg://akuma@localhost:5432/todo";
// var db = pgp(connectionString);
var client = new pg.Client(conString);

client.connect();

var query = client.query("SELECT task FROM listo ORDER BY id");

query.on("row", function(row, result) {
  result.addRow(row);
});

query.on("end", function(result) {
  console.log(JSON.stringify(result.rows, null, ""));
  client.end();
})
