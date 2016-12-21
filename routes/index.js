var express = require('express');
var router = express.Router();
var path = require('path');

const db = require( '../database' )
// var pg = require("pg");
// var conString = "pg://melissamorel@localhost:5432/todo";
// var client = new pg.Client(conString);
// client.connect();
/* GET home page. */

//verb and uri must be unique within the app

router.get('/', function(req, res, next) {
  //setting title variable
  res.render('index', { title: 'To Do List', banana: 'yellow' });

});

router.get( '/test', (request, response, next) => {
  db.getListos()
    .then( todos => {
      response.render( 'test', { todos })
    })
    // .then( function( todos) {
    //   response.render( 'test', { todos: todos })
    // })
})
//
// router.get('/', function(req, res, next) {
//   var results = [];
//   pg.connect(connectionString, function(err, client, done) {
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//   })
// })

// router.post('/api/v1/todos', (req, res, next) => {
//   const results = [];
//   //Grab data from http request
//   const data = {text: req.body.text, complete: false}
//   //Get a postgres client from the connection pool
//   pg.connect(conString), (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//     // SQL Query > Insert Data
//     client.query('INSERT INTO listo(task) values($1)',
//     [data.task, data.complete]);
//
//     // SQL Query > Select Data
//     const query = client.query('SELECT * FROM listo ORDER BY id ASC');
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//       results.push(row);
//     });
//     // After all data is returned, close connection and return results
//     query.on('end', () => {
//       done();
//       return res.json(results);
//     });
//   });
// });


//     var task = req.body.store
//     database.listo(task)
//     .then(function(todo) {
//       res.redirect('/')
//     })
//     .catch(function(error) {
//       res.render('display'), {
//         error: error,
//         task: task,
//       }
//     })
// })

module.exports = router;
