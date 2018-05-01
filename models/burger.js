const orm = require("../config/orm.js");

module.exports = {
	all: function(){
		return orm.all("burgers");
	},

	create: function(cols, vals){
		return orm.create("burgers", cols, vals);
	},

	update: function(obj, condition){

	},

	delete: function(condition){

	}
}