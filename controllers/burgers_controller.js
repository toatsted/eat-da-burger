const express = require("express");

let router = express.Router();

// import model burger.js
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
	burger.all()
		.then(data => res.render("index", {burgers: data}))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

router.post("/", (req, res) => {
	burger.create("name", req.body.name)
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

router.put("/:id", (req, res) => {
	burger.update({
			eaten: req.body.eaten
		},{
			id: req.params.id
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

module.exports = router;