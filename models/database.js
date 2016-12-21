var databaseName = process.env.NODE_ENV === 'todo'
var pgp = require('pg-promise')();
var connectionString = `postgres://${process.env.USER}@localhost:5432/todo`
var db = pgp(connectionString);

