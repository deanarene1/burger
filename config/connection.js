// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.DB_CONNECTION_STRING) {
  connection = mysql.createConnection(process.env.DB_CONNECTION_STRING);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// Export connection for our ORM to use.
module.exports = connection;
