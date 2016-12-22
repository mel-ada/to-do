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

router.post('/api/todo/modify', function(request, res) {
  // Get all the listo IDs
  console.log( request.body )
  // Then, ask our db code to delete
    // Then, redirect to the /

    // console.log('del');
    // then(() => res.redirect('/'))
  res.redirect( '/' )
})

module.exports = router
