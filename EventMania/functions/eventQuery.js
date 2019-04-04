const con = require('../configuration/databaseConnection.js');
const md5 = require('md5');



function getEvents(cb){
	  		
	  		var sql = "select eventId,eventName,venue,startTime,startDate,endTime,endDate,description,contactDetails,image from event_details where organiserEmail = '"+email+"';";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}

module.exports = { getEvents }
