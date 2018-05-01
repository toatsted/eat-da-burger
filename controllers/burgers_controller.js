const express = require("express");

let router = express.Router();

// import model burger.js
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
	burger.all()
		.then(data => res.render("index", {burgers: data}))
		.catch(err => console.log(err))
})

module.exports = router;