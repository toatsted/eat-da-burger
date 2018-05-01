const mysql = require("promise-mysql");

let conn;

mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Samueljh1",
		database: "burgers_db"
	})
	.then(connection => conn = connection)
	.catch(err => console.log(err))

module.exports = {
	selectAll: function(table){
		return conn.query("SELECT * FROM ??", table);
	},

	insertOne: function(){

	},

	updateOne: function(){
		
	}
}