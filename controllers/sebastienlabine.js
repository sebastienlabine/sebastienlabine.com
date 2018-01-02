var express = require('express');
var sebastienlabine = express.Router();

sebastienlabine.get('/', function (req, res) {
    res.render('sebastienlabine/index');
    })

sebastienlabine.get('/404', function (req, res) {
        res.render('404');
    })
    
    module.exports = sebastienlabine;