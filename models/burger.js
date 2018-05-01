const orm = require("../config/orm.js");

module.exports = {
	all: function(){
		return orm.selectAll("burgers")
	}
}