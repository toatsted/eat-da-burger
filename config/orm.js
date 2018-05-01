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
	all: function(table){
		return conn.query(`
				SELECT * FROM ??
			`, table);
	},

	create: function(table, cols, vals){
		return conn.query(`
				INSERT INTO ??(
					??
				)VALUES (
					?
				)
			`, [table, cols.join(", "), vals.join(", ")]);
	},

	update: function(table, obj, condition){
		
	},

	delete: function(table, condition){

	}
}