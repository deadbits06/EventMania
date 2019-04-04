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


const database = require("../functions/donarQuery.js");
const mail = require('../functions/mail.js');
const pdfObj = require('../functions/pdf.js');



router.get('/register',(req,res)=>{

	res.render("donar");

})



//Donar Registration
router.post('/register',(req,res)=>{

	var firstName = req.body.fname;
	var lastName = req.body.lname;
	var email = req.body.email;
	var password = req.body.password;
	var contactNumber = req.body.contactNo;
	var city = req.body.city;
	var hash = md5(password);
	console.log(password);
	console.log(hash);


	database.donarRegistration(firstName,lastName,hash,contactNumber,city,email,function(err,result){
		if (err){ 
		throw err;
	    res.sendStatus(400);
	    }
	    console.log("1 record inserted");
	    mail.sendMail(firstName,password,email,"Donar");
	    res.redirect("/home");
	});
});


module.exports = router;