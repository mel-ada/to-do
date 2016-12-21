var express = require('express')
var router = express.Router()
var path = require('path')

const db = require( '../database' )

// app.use(bodyParser.urlencoded({extended: true}))
/* GET home page. */

//verb and uri must be unique within the app

router.get('/', function(req, res, next) {
  //setting title variable
  db.getListos()
    .then( todos => {
  res.render('index', { title: 'NOT Trello', todos })
  })
})

router.post('/api/todo', function(req, res) {
  const {item} = req.body
  console.log('Item: ', item);
  console.log('Item: ', req.body);

  db.addItems(item).then(() => res.redirect('/'))
})

module.exports = router
