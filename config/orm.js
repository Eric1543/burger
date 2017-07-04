var connection = require("../config/connection.js");

var orm = {
	selectAll: function(){
		connection.query("SELECT * FROM burgers", function(err, result){
			console.log(result);
		});
	}
	insertOne: function(tableInput){
		var queryString = "INSERT INTO ??.?? VALUES ?"
		connection.query("INSERT INTO quotes (quote) VALUES (?)", [req.body.quote], function(err, result)
	}
	updateOne: function(){

	}
  selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    	callback(result);    
    	return result;
    });
  }
};

module.exports = orm;