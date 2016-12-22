const pgp = require('pg-promise')()
const CONNECTION_STRING = "pg://melissamorel@localhost:5432/todo"
const db = pgp( CONNECTION_STRING )

const getListos = () =>
  db.any( "SELECT * FROM listo" )

  // Equivalent to above
  // function getListos() {
  //   return db.any( "SELECT * FROM listo" )
  // }

const addItems = task =>
  db.oneOrNone( "INSERT INTO listo (task) VALUES ($1)", [task]);

const removeItems = ids =>
  db.manyOrNone( "DELETE FROM listo WHERE id IN ($1:csv)", [ids]);

const markComplete = ids =>
  db.manyOrNone( "UPDATE listo SET complete=TRUE WHERE id=($1:csv)", [ids]);

const editTask = (newTask, id) =>
  db.oneOrNone( "UPDATE listo SET task=$1 WHERE id=$2", [newTask, id]);
//update function

module.exports = { getListos, addItems, removeItems, markComplete, editTask }
