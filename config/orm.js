var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	insertOne: function(tableInput){
		var queryString = "INSERT INTO ??.?? VALUES ?"
		connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	updateOne: function(){

	},
  selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    	callback(result);    
    	return result;
    });
  }
};

module.exports = orm;