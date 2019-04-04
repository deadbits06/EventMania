const con = require('../configuration/databaseConnection.js');
const md5 = require('md5');

function donarRegistration(firstName,lastName,hash,contactNumber,city,email,cb){

	  var sql = "INSERT INTO donar VALUES('"+firstName+"','"+lastName+"','"+hash+"','"+contactNumber+"','"+city+"','"+email+"')";
	  con.query(sql, function (err, result) {
	  	cb(err,result);
	  });

}


module.exports = { donarRegistration }
