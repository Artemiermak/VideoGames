var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Lesson 4',
    message: "Node home page" });
});

/* GET register page. */
router.get('/register', function(req, res, next){
  res.render('register');
});

/* GET login page. */
router.get('/login', function(req, res, next){
  res.render('login');
});

module.exports = router;
