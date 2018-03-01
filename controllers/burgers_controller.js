

// NODE DEPENDENCIES
var express = require('express');
var router = express.Router();

// IMPORT MODEL (burger.js) 
var burger = require('../models/burger.js');

//CREATE ROUTES & LOGIC 


//RENDER BURGERS TO DOM -- INDEX PAGE
router.get('/', function(req, res) {
  
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
            };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// CREATE NEW BURGER 
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

// DEVOUR BURGER 
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export ROUTES
module.exports = router;
