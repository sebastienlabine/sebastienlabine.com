var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var session = require('express-session')
var pug = require('pug')
var app = module.exports = express();
var port = 32400;

/* Configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/', require('./controllers/sebastienlabine'));

app.use(function(req, res){
    res.redirect("/404");
    });
  module.exports = router;

app.listen(port, function () {
    console.log('Our app is running on http://sebastienlabine.com:' + port);
  });
  