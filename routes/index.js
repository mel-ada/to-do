var express = require('express')
var router = express.Router()
var path = require('path')

const db = require( '../database' )

/* GET home page. */

//verb and uri must be unique within the app

router.get('/', function(req, res, next) {
  //setting title variable
  db.getListos()
    .then( todos => {
  res.render('index', { title: 'To Do List', todos })
  })
})

router.post('')

module.exports = router
