// IMPORT MYSQL CONNECTION OBJECT -- created in connection.js
var connection = require ('./connection.js');

// HELPER FUNCTIONS
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

// CREATE ORM OBJECT FOR SQL QUERIES  
var orm = {
        // FUNCTION TO RETURN ALL TABLE ENTRIES 
	selectAll: function(tableInput, cb) {   
       
        var queryString = "SELECT * FROM " + tableInput + ";";  
        
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result); 
		});
	},

	// FUNCTION TO INSERT SINGLE TABLE ENTRY
	insertOne: function(table, cols, vals, cb) {
		
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// FUNCTION TO UPDATE A SINGLE TABLE ENTRY
	updateOne: function(table, objColVals, condition, cb) {
		
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// EXPORT ORM OBJECT 
module.exports = orm;