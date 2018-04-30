// const burgerjs = require("../models/burger.js");

module.exports = function(app){
	app.get("/", (req, res) => {
		req.db.query(`
				SELECT * FROM burgers
			`)
			.then(data => {
				res.render("index", {burgers: data})
			})
			.catch(err => console.log(err))
	})
}