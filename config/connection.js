const mysql = require("promise-mysql");

module.exports = function(app){
	let connection;
	mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "Samueljh1",
			database: "burgers_db"
		})
		.then(conn => connection = conn)
		.catch(err => console.log(err))
	app.use((req, res, next) => {
		req.db = connection;
		next();
	})
}
	