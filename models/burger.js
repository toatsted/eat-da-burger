const orm = require("../config/orm.js");

module.exports = {
	all: function(){
		return orm.all("burgers");
	},

	one: function(condition){
		return orm.one("burgers", condition)
	},

	create: function(cols, vals){
		return orm.create("burgers", cols, vals);
	},

	update: function(val, condition){
		return orm.update("burgers", val, condition);
	},

	delete: function(condition){
		return orm.delete("burgers", condition);
	}
}