var express = require('express')
var router = express.Router()
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
const session = require('express-session');
const md5 = require('md5');
const multer = require('multer');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const assert = require('assert');
const csv=require('csvtojson');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const mkdirp = require('mkdirp');
const NodeGeocoder = require('node-geocoder');
const QRCode = require('qrcode')
 
// QRCode.toFile('C:/wamp/www/EventMania/files/quotation.png', 'Some text', {
//   color: {
//     dark: '#00F',  // Blue dots
//     light: '#0000' // Transparent background
//   }
// }, function (err) {
//   if (err) throw err
//   console.log('done')
// })

const database = require("../functions/organiserQuery.js");
const mail = require('../functions/mail.js');
//const pdfObj = require('../functions/pdf.js');


// router.get('/home',(req,res)=>{

// 	console.log("inside");
// 	if (req.session.designation) {
// 		console.log(req.session.designation);
// 		console.log("in session");
// 		res.render("home", {userId: req.session.designation, roles: req.session.roles});
// 	}
// 	else{
// 		console.log("out session");
// 		res.render("home");
// 	}
// });




router.get('/login', function(req,res){
	res.render("login");
});


router.post('/login',(req,res)=>{

	var email = req.body.email;
	var password = req.body.pass;
	var hash = md5(password);

	database.login(email,hash,function(err,result){

		if(err) throw err;
			if(result.length==1)
			{	
				console.log(hash);
				var temp_pass = JSON.stringify(result[0].password);
				var temp2_pass= temp_pass.replace(/\"/g, "");

				if(hash == temp2_pass){
					console.log("Correct password "+temp_pass);
					res.redirect("home");

				}
				else{
					console.log("Incorrect password");
					res.render("login");
				}
			}
			else{
				console.log("Please Register First");
				res.render("login");	
			}
	});

});


//Organiser Registration
router.post('/organiser_register',(req,res)=>{

	var firstName = req.body.fname;
	var lastName = req.body.lname;
	var email = req.body.email;
	var password = req.body.password;
	var contactNumber = req.body.contactNo;
	var city = req.body.city;
	var hash = md5(password);
	console.log(password);
	console.log(hash);


	database.organiserRegistration(firstName,lastName,hash,contactNumber,city,email,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log("1 record inserted");
	    mail.sendMail(firstName,password,email);

	});
});



const storage = multer.diskStorage({
	destination : function(req,file,cb){
		console.log("inside storage");
		var organiserEmail = req.body.organiserEmail;
		var eventName = req.body.eventName;
		const dir = './uploads/'+organiserEmail+'/'+eventName;
		mkdirp(dir, err => cb(null, dir));//+club+'/'+event
	},
	filename : function(req,file,cb){
		let temp = file.originalname;
		cb(null , temp)
	}
});

var upload = multer({ storage: storage })


//Event Registration
router.post('/event_register',upload.single('Quotation'),(req,res)=>{
	
	console.log(req.file);
	var eventName = req.body.eventName;
	var organiserEmail = req.body.organiserEmail;
	var venue = req.body.venue;
	//var startDate = req.body.startDate;
	//var endDate = req.body.endDate;
	//var startTime = req.body.startTime;
	//var endTime = req.body.endTime;
	var noOfVolunteers = req.body.noOfVolunteers;
	var description = req.body.description;
	var contactDetails = req.body.contactDetails;
	var temp = req.file.destination.split('.')
	var path = temp[1]+'.'+temp[2];
	var quotation = "192.168.43.19/EventMania"+path;
	console.log(quotation);

	var latitude;
	var longitude;




	// database.eventRegistration(eventName,organiserEmail,venue,startDate,endDate,startTime,endTime,noOfVolunteers,quotation,description,latitude,longitude,contactDetails,function(err,result){
	// 	if (err){ 
	// 	throw err;
	//     res.sendStatus(400);
	//     }
	//     console.log("1 record inserted");
	// });
});






router.post('/test',(req,res)=>{
	var location = req.body.location;
	console.log(location);
	mail.sendTicket("name","eventName","nimbalkarnishant98@gmail.com")
	var options = {
	  provider: 'google',
	 
	  // Optional depending on the providers
	  httpAdapter: 'https', // Default
	  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
	  formatter: null         // 'gpx', 'string', ...
	};
	 
	var geocoder = NodeGeocoder(options);
	 
	// Using callback
	geocoder.geocode('29 champs elysée paris', function(err, res) {
	  console.log(res);
	});



})

module.exports = router;