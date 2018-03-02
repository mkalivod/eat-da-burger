
// CONNECT NODE TO MYSQL SERVER ---> Will export the connection to the MySQL server && will import 'connection.js' into 'orm.js'

// NODE DEPENDENCIES
var mysql = require('mysql');

// CREATE CONNECTION OBJECT
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Codem07!',
    database: 'burgers_db'
});

// ESTABLISH CONNECTION TO MYSQL
connection.connect(function(err) {
    if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
    }
    console.log('Connected to MYSQL database as id ' + connection.threadId + '\n\n');
})

// EXPORT CONNECTION 
module.exports = connection;