const http = require('http');
const express =require('express');
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



let uploadData = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));


//functions
//const mail = require('./functions/mail.js');
const con = require('./configuration/databaseConnection.js');


//setting the template engine
app.set('view engine','ejs');

//session maintaining
app.use(session({secret:'noneed', resave: false, saveUninitialized: true}));

// by using locals we can access the session variable anywhere in the templates.
app.use(function(req, res, next){
	res.locals.email = req.session.email;
	res.locals.roles = req.session.roles;
	// res.locals.roles = req.session.userId;
	res.locals.status = "400";
	next();
});



//AJAX
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//router
const volunteer = require('./routes/volunteer.js');
const organiser = require('./routes/organiser.js');
const donar = require('./routes/donar.js');
const database = require("./functions/login.js");

app.use('/volunteer',volunteer);
app.use('/organiser',organiser);
app.use('/donar',donar);



app.get('/home',(req,res)=>{

	console.log("inside");
	if (req.session.email) {
		console.log(req.session.email);
		console.log("in session");
		res.render("home", {email: req.session.email, roles: req.session.roles});
	}
	else{
		console.log("out session");
		res.render("home");
	}
});

app.get('/login', function(req,res){
	res.render("login");
});



app.post('/login',(req,res)=>{

	var email = req.body.email;
	var password = req.body.password;
	var hash = md5(password);
	var optradio = req.body.optradio;

	if(optradio == "organiser" ){
	database.organiserLogin(email,hash,function(err,result){
		console.log("inside organiser");
		if(err) throw err;
			if(result.length==1)
			{	
				console.log(hash);
				var temp_pass = JSON.stringify(result[0].password);
				var temp2_pass= temp_pass.replace(/\"/g, "");

				if(hash == temp2_pass){
					req.session.email = req.body.email;
					req.session.roles = "organiser";
					// console.log(req.session.userId)
					// console.log(req.session.roles);
					// console.log(req.session.designation)
					console.log("Correct password"+temp_pass);
					res.redirect("home");

				}
				else{
					console.log("Incorrect password");
					res.render("login");
				}
			}
			else{
				console.log("username not found");
				res.render("login");	
			}
	});
	}
	else if (optradio == "donar") {
		console.log("inside rec");
		database.donarLogin(email,hash,function(err,result){
		console.log("inside donar");

		if(err) throw err;
			if(result.length==1)
			{	
				console.log(hash);
				var temp_pass = JSON.stringify(result[0].password);
				//var temp_role = JSON.stringify(result[0].role);
				var temp2_pass= temp_pass.replace(/\"/g, "");
				//var temp2_role= temp_role.replace(/\"/g, "");

				if(hash == temp2_pass){
					req.session.email = req.body.email;
					req.session.roles = "donar";
					// console.log(optradio);
					// req.session.designation = optradio;
					// console.log(req.session.userId)
					// console.log(req.session.roles);
					// console.log(req.session.designation)
					console.log("Correct password"+temp_pass);
					res.redirect("home");

				}
				else{
					console.log("Incorrect password");
					res.render("login");
				}
			}
			else{
				console.log("username not found");
				res.render("login");	
			}
	});
		}

	else if (optradio == "volunteer") {
		console.log("inside rec");
		database.volunteerLogin(email,hash,function(err,result){
		console.log("inside volunteer");

		if(err) throw err;
			if(result.length==1)
			{	
				console.log(hash);
				var temp_pass = JSON.stringify(result[0].password);
				//var temp_role = JSON.stringify(result[0].role);
				var temp2_pass= temp_pass.replace(/\"/g, "");
				//var temp2_role= temp_role.replace(/\"/g, "");

				if(hash == temp2_pass){
					req.session.email = req.body.email;
					req.session.roles = "volunteer";
					// console.log(optradio);
					// req.session.designation = optradio;
					// console.log(req.session.userId)
					// console.log(req.session.roles);
					// console.log(req.session.designation)
					console.log("Correct password"+temp_pass);
					res.redirect("home");

				}
				else{
					console.log("Incorrect password");
					res.render("login");
				}
			}
			else{
				console.log("username not found");
				res.render("login");	
			}
	});
		}

});

app.get('/logout',function(req,res){    
    req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  
        {  
            res.redirect('/login');  
        }  
    });  

});

app.get('/feedback',function(req,res){

	res.render("feedback");
});

app.listen(8080);