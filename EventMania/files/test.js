//volunteer
function myEvents(email,cb){
	  		
	  		var sql = "select name,club from event_details where email in(select email from stud_event where email = '"+email+"');";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});

}


function getVolunteers(eventId,cb){
	  		
	  		var sql = "select fname,lname,contactNo from volunteer where email in(select email from volunteer_event_rel where email = '"+email+"');";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});

}


var jsonexport = require('jsonexport');

//data from DB
jsonexport(data,function(err, csv){
    if(err) return console.log(err);
    console.log(csv);
});


var json2csv = require('json2csv');

var json = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];

json2csv({data: json, fields: ['car', 'price', 'color']}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('file.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});


function setPresentStatus(code,email,eventId,cb){
	  		
		  	var sql = "UPDATE volunteer_event_rel SET isPresent = 1 where email='"+email+"' and eventId='"+eventId+"'";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});

}

function setFeedbackStatus(email,eventId,cb){

		  	var sql = "UPDATE volunteer_event_rel SET isFeedbackFilled = 1 where email='"+email+"' and eventId='"+eventId+"'";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}


function getFeedbackRating(eventId,cb){

		  	var sql = "select avg(isPresent), where eventId='"+eventId+"'";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}





function getFeedbackComment(eventId,cb){

		  	var sql = "select comment from feedback where eventId='"+eventId+"'";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});

}






router.post('/feedback',(req,res){
	
	var email = req.body.email;
	database.setFeedback(email,eventId,function(err,result){

		console.log("successfully added");
		pdfObj.pdf();
		mail.sendMail();
		res.render("home");
	});
});


router.post('/myEvents',(req,res){
	
	var email = req.body.email;
	database.getEvents(email,function(err,result){

		res.send("",{result:result});

	});

});


function setFeedback(email,eventId,eventRate,helpful,similar,recommend,structured,responsibility,cb){

		  	var sql = "INSERT INTO feedback values('"+email+"','"+eventId+"','"+eventRate+"','"+helpful+"','"+similar+"','"+recommend+"','"+structured+"','"+responsibility+"')";
			con.query(sql,function(err,result,fields){
			cb(err,result);
			});
}


