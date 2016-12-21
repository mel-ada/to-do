var express = require('express');
var router = express.Router();
var pg = require("pg");

var conString = "pg://akuma@localhost:5432/todo";

var client = new pg.Client(conString);
client.connect();



/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
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

router.post('/api/todo', function(req, res) {
    var task = req.body.store
    database.listo(task)
    .then(function(todo) {
      res.redirect('/')
    })
    .catch(function(error) {
      res.render('display'), {
        error: error,
        task: task,
      }
    })
})

module.exports = router;
