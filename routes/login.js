var mongoose = require('mongoose');
var express = require('express');
var Login = require('../models/login.js');

var router = express.Router();

router.get('/', function(req, res){
    Login.find(function(err, acc){
        if(err){
            console.log(err);
        }
        res.json(acc);
    });
});

router.post('/create', function(req, res){
    var newAcc = new Login({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    newAcc.save(function(err, acc){
        if(err){
            console.log(err);
        }
        res.json(acc);
    });
});


module.exports = router;
