const con = require('../configuration/databaseConnection.js');
const md5 = require('md5');

function organiserLogin(email,hash,cb){

	  		var sql = "select password from organiser where email='"+email+"';";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}


function donarLogin(email,hash,cb){

	  		var sql = "select password from donar where email='"+email+"';";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}

function volunteerLogin(email,hash,cb){

	  		var sql = "select password from volunteer where email='"+email+"';";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}

module.exports = { organiserLogin, donarLogin , volunteerLogin }
