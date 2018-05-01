let conn;
require("./connection.js")
	.then(connection => conn = connection)

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