const mysql = require("promise-mysql");

module.exports = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Samueljh1",
	database: "burgers_db"
});
