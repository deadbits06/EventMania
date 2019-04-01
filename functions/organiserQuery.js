const con = require('../configuration/databaseConnection.js');
const md5 = require('md5');


function organiserRegistration(firstName,lastName,hash,contactNumber,city,email,cb){

	  var sql = "INSERT INTO organiser VALUES('"+firstName+"','"+lastName+"','"+hash+"','"+contactNumber+"','"+city+"','"+email+"')";
	  con.query(sql, function (err, result) {
	  	cb(err,result);
	  });

}

function login(email,hash,cb){

	  		var sql = "select password from organiser where email='"+email+"';";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}

function eventRegistration(eventName,organiserEmail,venue,startDate,endDate,startTime,endTime,noOfVolunteers,quotation,description,latitude,longitude,contactDetails,location,cb){

	  var sql = "INSERT INTO event_details(eventName,organiserEmail,venue,startDate,endDate,startTime,endTime,noOfVolunteers,quotation,description,latitude,longitude,contactDetails) VALUES('"+eventName+"','"+organiserEmail+"','"+venue+"','"+startDate+"','"+endDate+"','"+startTime+"','"+endTime+"','"+noOfVolunteers+"','"+quotation+"','"+description+"','"+latitude+"','"+longitude+"','"+contactDetails+"')";
	  con.query(sql, function (err, result) {
	  	cb(err,result);
	  });

}

module.exports = { organiserRegistration, login ,eventRegistration }
