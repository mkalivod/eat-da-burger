

// IMPORT ORM -- node dependancy
var orm = require('../config/orm.js');

// CREATE BURGER OBJECT -- calls ORM functions using burger specific input
var burger = {
 
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// EXPORT BURGER OBJECT  -- exports the database functions for the controller ( burgers_controller.js)
module.exports = burger;