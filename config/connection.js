
// Establish a connection to MYSQL server and then export
// the connection for ORM use 

// NODE DEPENDENCIES
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Codem07!',
    database: 'burgers_db'
});

// ESTABLISH CONNECTION
connection.connect(function(err) {
    if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
    }
    console.log('Connected to MYSQL database as id ' + connection.threadId + '\n\n');
});

// EXPORT CONNECTION 
module.exports = connection;