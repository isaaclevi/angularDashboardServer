var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Users.js');

router.get('/', function(req, res, next) {
    User.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
});