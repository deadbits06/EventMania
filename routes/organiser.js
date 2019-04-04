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
const QRCode = require('qrcode');
var MapboxClient = require('mapbox')
//var json2csv = require('json2csv');

 
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


const storage = multer.diskStorage({
	destination : function(req,file,cb){
		console.log("inside storage");
		var organiserEmail = req.body.organiserEmail;
		var eventName = req.body.eventName;
		const dir = './uploads/organiser/'+organiserEmail+'/'+eventName;
		mkdirp(dir, err => cb(null, dir));//+club+'/'+event
	},
	filename : function(req,file,cb){
		let temp = file.originalname;
		cb(null , temp)
	}
});

var upload = multer({ storage: storage })

var client = new MapboxClient('pk.eyJ1IjoiZHluYW1vMjgxOCIsImEiOiJjanUxZ3prMmMwMWt0NGJwYXZpNDk5NXg4In0.M_GgSOEjSUkEFQI7PhR7Jw')



router.get('/register',(req,res)=>{

	res.render("organiser");

})

//Organiser Registration
router.post('/register',(req,res)=>{

	var firstName = req.body.fname;
	var lastName = req.body.lname;
	var email = req.body.email;
	var password = req.body.password;
	var contactNumber = req.body.contactNo;
	var city = req.body.city;
	var instituteName = req.body.instituteName;
	var hash = md5(password);
	console.log(password);
	console.log(hash);


	database.organiserRegistration(firstName,lastName,hash,contactNumber,city,email,instituteName,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log("1 record inserted");
	    mail.sendMail(firstName,password,email,"Organiser");
	    res.redirect("/home");
	});
});






router.get('/event_register',(req,res)=>{
	if (req.session.email) {

	res.render("eventRegister");
	}
	else{
		res.redirect("/login");
	}

});

router.get('/fullEvent',(req,res)=>{
	if (req.session.email) {
		res.render("fullEvent");
	}
	else{
		res.redirect("/login");
	}

});

//Event Registration
router.post('/event_register',upload.array('Quotation'),(req,res)=>{
	if (req.session.email) {
	
	console.log(req.files);
	var eventName = req.body.eventName;
	var organiserEmail = req.body.organiserEmail;
	var venue = req.body.venue;
	var startDate = req.body.start_date;
	var endDate = req.body.end_date;
	var startTime = req.body.start_time;
	var endTime = req.body.end_time;
	var noOfVolunteers = req.body.noOfVolunteer;
	var description = req.body.description;
	var contactDetails = req.body.contactNumber;

	console.log(req.files[0].originalname);

	var temp = req.files[0].destination.split('.')
	var path = temp[1]+'.'+temp[2];
	console.log(path);


	var temp1 = req.files[1].destination.split('.')
	var path2 = temp1[1]+'.'+temp1[2];
	console.log(path2);
	var quotation = "192.168.43.19/EventMania"+path+"/"+req.files[0].originalname;
	var image = "192.168.43.19/EventMania"+path2+"/"+req.files[1].originalname;
	console.log(quotation);
	console.log(image);

	client.geocodeForward(venue, function (err, data, res1) {
	  console.log(data['features'][0]['geometry']['coordinates'])
	  var temp = data['features'][0]['geometry']['coordinates'];
	  var latitude = temp[1]
	  var longitude = temp[0]
	  console.log(latitude);

	database.eventRegistration(eventName,organiserEmail,venue,startDate,endDate,startTime,endTime,noOfVolunteers,quotation,description,latitude,longitude,contactDetails,image,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log("1 record inserted");
	    res.redirect("/home");
	});


	});
	}
	else{
		res.redirect("/login")
	}
});


router.get('/myEvents',function(req,res){
	if (req.session.email) {

	var email = req.session.email;
	console.log("inside myEvents "+email);
	database.myEvents(email,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log(result);
	    res.render("myEvents",{results:result});
	});
	}
	else{
		res.redirect("/login");
	}
});


router.post('/getVolunteers',function(req,res){

	if (req.session.email) {

	var email = req.session.email;
	var eventId = req.body.eventId;

	console.log(" Event Id is " +eventId);
	console.log("inside myEvents "+email);
	    database.getRegisteredVolunteers(eventId,function(err,result){
	    if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log(result);
	    res.render("getVolunteers",{volunteers:result});
	    });
	}
	else{
		res.redirect("/login");
	}

});


router.get('/download',function(req,res){

	//var eventId = req.session.email;
	//var eventId = ;
	var eventId = 1002;

	database.getRegisteredVolunteers(eventId,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log(result);

	    json2csv({data: result, fields: ['First Name', 'Last Name', 'Contact Number']}, function(err, csv) {
		  if (err) console.log(err);
		  fs.writeFile('file.csv', csv, function(err) {
		    if (err) throw err;
		    console.log('file saved');
		  });
		});

	    res.render("myEvents");
	});
});



module.exports = router;