const con = require('../configuration/databaseConnection.js');
const md5 = require('md5');

// function staffRegistration(branch,firstName,lastName,hash,email,contactNumber,role,regDate,cb){

// 	  var sql = "INSERT INTO staff (fname, lname, branch, email, password, contactNo, role, regDate) VALUES ('"+firstName+"','"+lastName+"','"+branch+"','"+email+"','"+hash+"','"+contactNumber+"','"+role+"','"+regDate+"' )";
// 	  con.query(sql, function (err, result) {
// 	  	cb(err,result);
// 	  });

// }


// function recruiterRegistration(name,companyName,hash,email,contactNumber,regDate,cb){

// 	  var sql = "INSERT INTO recruiter (company, name, contactNo, password, regDate, email) VALUES ('"+companyName+"','"+name+"','"+contactNumber+"','"+hash+"','"+regDate+"','"+email+"')";
// 	  con.query(sql, function (err, result) {
// 	  	cb(err,result);
// 	  });

// }


// function eventRegistration(event,club,year,faculty,date,cb){

// 	  var sql = "INSERT INTO events (name, club, date, faculty, reg_date) VALUES ('"+event+"','"+club+"','"+year+"','"+faculty+"','"+date+"')";
// 	  con.query(sql, function (err, result) {
// 	  	cb(err,result);
// 	  });

// }


// function staffLogin(username,hash,cb){

// 	  		var sql = "select password, role from staff where sId='"+username+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});
// }


// function recruiterLogin(username,hash,cb){

// 	  		var sql = "select password from recruiter where rId= '"+username+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});
// }

// function getEventsParticipated(username,cb){
	  		
// 	  		var sql = "select name,club from events where eId in(select eId from stud_event where username = '"+username+"');";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});

// }

// function setRequestList(rId,username,eId,cb){
	  		
// 	  		var sql = "INSERT INTO request_list VALUES ('"+rId+"','"+eId+"','"+username+"',1)";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});

// }


// function getStaffId(email,cb){

// 		  	var sql = "select sId from staff where email = '"+email+"' ";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});

// }

// function getRecruiterId(email,cb){

// 		  	var sql = "select rId from recruiter where email = '"+email+"' ";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});

// }

// function getStaffDetails(cb){

// 		  	var sql = "select * from staff;";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function editStaff(fname,lname,email,password,contactNo,role,sid,cb){

// 		  	var sql = "UPDATE staff SET fname = '"+fname+"', lname = '"+lname+"', email = '"+email+"', password = '"+md5(password)+"', contactNo = '"+contactNo+"', role = '"+role+"' WHERE sId = '"+sid+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function getRecruiterDetails(cb){

// 		  	var sql = "select * from recruiter;";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function editRecruiter(company,name,email,password,contactNo,rid,cb){

// 		  	var sql = "UPDATE recruiter SET company = '"+company+"', name = '"+name+"', email = '"+email+"', password = '"+md5(password)+"', contactNo = '"+contactNo+"' WHERE rId = '"+rid+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function getEventsDetails(cb){

// 		  	var sql = "select * from events;";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function editEvents(eventName,clubName,eventDate,facultyName,eid,cb){

// 		  	var sql = "UPDATE events SET name = '"+eventName+"', club = '"+clubName+"', date = '"+eventDate+"', faculty = '"+facultyName+"' WHERE eId = '"+eid+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function deleteStaff(staffId,cb){

// 		  	var sql = "DELETE FROM staff WHERE sId = '"+staffId+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function deleteEvent(eventId,cb){

// 		  	var sql = "DELETE FROM events WHERE eId = '"+eventId+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function deleteRecruiter(recruiterId,cb){

// 		  	var sql = "DELETE FROM recruiter WHERE rId = '"+recruiterId+"';";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }


// function getHodFromFaculty(sId,cb){

// 		  	var sql = "select sId,fname,lname,branch from staff where role = 'hod' and branch in (select branch from staff where sId = '"+sId+"');";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

// function setHodApproval(staffId,eId,branch,hodId,csv_path,cb){

// 		  	var sql = "insert into hod_approval(staffId,eId,branch,hodId,csv_path)  values('"+staffId+"','"+eId+"','"+branch+"','"+hodId+"','"+csv_path+"');";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }


// function setLocation(eId,filename,cb){

// 		  	var sql = "UPDATE events SET filename = '"+filename+"' where eId = '"+eId+"' ;";
// 			con.query(sql,function(err,result,fields){
// 			cb(err,result);
// 			});	
// }

function getCoords(eventId,cb){

		  	var sql = "select latitude,longitude from eventDetails where eventId = '"+eventId+"' ;";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});	
}

module.exports = { getCoords }